package org.eclipse.glsp.example.javaemf.marker;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.eclipse.glsp.graph.GEdge;
import org.eclipse.glsp.graph.GModelElement;
import org.eclipse.glsp.graph.GPoint;
import org.eclipse.glsp.graph.GShapeElement;
import org.eclipse.glsp.server.emf.notation.EMFNotationModelState;
import org.eclipse.glsp.server.features.validation.Marker;
import org.eclipse.glsp.server.features.validation.MarkerKind;
import org.eclipse.glsp.server.features.validation.ModelValidator;

import com.google.inject.Inject;

public class ConceptMapValidator implements ModelValidator {

    @Inject
    protected EMFNotationModelState modelState;

    @Override
    public List<Marker> doBatchValidation(final GModelElement element) {
        List<Marker> markers = new ArrayList<>();

        if (element.getType() == "node:topic") {
            markers.add(validateTopic(element));
        }

        if (element.getType() == "node:concept") {
            markers.add(validateConcept(element));
        }

        if (element.getType() == "node:imported_concept") {
            markers.add(validateImportedConcept(element));
        }
        return markers;
    }

    @Override
    public List<Marker> doLiveValidation(final GModelElement element) {
        List<Marker> markers = new ArrayList<>();
        if ((element.getType() == "node:topic") || (element.getType() == "node:concept")
            || (element.getType() == "node:imported_concept")) {
            markers.add(selfElement(element));
        }

        return markers;
    }

    protected Marker validateTopic(final GModelElement topic) {
        Collection<GEdge> incomingEdges = modelState.getIndex().getIncomingEdges(topic);
        Collection<GEdge> outgoingEdges = modelState.getIndex().getOutgoingEdges(topic);

        boolean check = true;

        for (GEdge edgeI : incomingEdges) {
            for (GEdge edgeO : outgoingEdges) {
                if (edgeI.getSourceId() == edgeO.getTargetId()) {
                    check = false;
                }
            }
        }

        if ((incomingEdges.size() > 0) && (outgoingEdges.size() > 0)) {
            return new Marker("Topic", "The topic contributes to a circular secuence", topic.getId(), MarkerKind.ERROR);
        }

        if (check == true) {
            if ((incomingEdges.size() == 0) && (outgoingEdges.size() == 0)) {
                return new Marker("Topic",
                    "There cannot be a topic without any type of connections (Origin/Destination)", topic.getId(),
                    MarkerKind.ERROR);
            }
            return new Marker("Topic", "This is a Valid Topic", topic.getId(), MarkerKind.INFO);
        }

        return new Marker("Topic", "This is an Invalid Topic, The topics have to follow a logical order", topic.getId(),
            MarkerKind.ERROR);

    }

    protected Marker selfElement(final GModelElement element) {
        Collection<GEdge> outgoingEdges = modelState.getIndex().getOutgoingEdges(element);

        for (GEdge edgeO : outgoingEdges) {
            if ((edgeO.getSource() == element) && (edgeO.getTarget() == element)) {
                return new Marker("Bad Connection", "A topic cannot connect to itself", element.getId(),
                    MarkerKind.ERROR);
            }
        }
        return null;

    }

    protected Marker validateConcept(final GModelElement concept) {
        Collection<GEdge> incomingEdges = modelState.getIndex().getIncomingEdges(concept);
        Collection<GEdge> outgoingEdges = modelState.getIndex().getOutgoingEdges(concept);

        boolean check = true;

        for (GEdge edgeI : incomingEdges) {
            for (GEdge edgeO : outgoingEdges) {
                if (edgeI.getSourceId() == edgeO.getTargetId()) {
                    check = false;
                }
            }
        }

        String topicParentId = concept.getParent().getId();
        Optional<GModelElement> topic = modelState.getIndex().get(topicParentId);
        GModelElement topicParent = modelState.getIndex().get(topicParentId).get();
        if (topic == null) {
            return new Marker("Concept", "The concept should be below the topic", concept.getId(), MarkerKind.ERROR);
        }

        /*
         * if (checkPosition(concept, topicParent) == true) {
         * return new Marker("Concept", "The concept should be below the topic", concept.getId(), MarkerKind.ERROR);
         * }
         */

        if ((incomingEdges.size() > 0) && (outgoingEdges.size() > 0)) {
            return new Marker("Concept", "The concept contributes to a circular secuence", concept.getId(),
                MarkerKind.ERROR);
        }

        if (check == true) {
            if (incomingEdges.size() == 0 && (outgoingEdges.size() == 0)) {

                return new Marker("Concept",
                    "The concept should have logical connections with the others concepts/imported concepts",
                    concept.getId(), MarkerKind.WARNING);

            }

            return new Marker("Concept", "This is a Valid Concept", concept.getId(), MarkerKind.INFO);
        }

        return new Marker("Concept",
            "This is an Invalid Concept, The inportedconcepts/concepts have to follow a logical order", concept.getId(),
            MarkerKind.ERROR);
    }

    protected boolean checkPosition(final GModelElement concept, final GModelElement topic) {
        GPoint position = ((GShapeElement) concept).getPosition();
        double x = position.getX();
        double y = position.getY();
        GPoint positionTopic = ((GShapeElement) topic).getPosition();
        double xTopic = positionTopic.getX();
        double yTopic = positionTopic.getY();

        if ((x < xTopic) || (y < yTopic)) {
            return false;
        }

        return true;
    }

    protected Marker validateImportedConcept(final GModelElement importedConcept) {
        Collection<GEdge> incomingEdges = modelState.getIndex().getIncomingEdges(importedConcept);
        Collection<GEdge> outgoingEdges = modelState.getIndex().getOutgoingEdges(importedConcept);

        boolean check = true;

        for (GEdge edgeI : incomingEdges) {
            for (GEdge edgeO : outgoingEdges) {
                if (edgeI.getSourceId() == edgeO.getTargetId()) {
                    check = false;
                }
            }
        }

        if ((incomingEdges.size() > 0) && (outgoingEdges.size() > 0)) {
            return new Marker("Imported Concept", "The topic contributes to a circular secuence",
                importedConcept.getId(),
                MarkerKind.ERROR);
        }

        if (check == true) {
            if ((incomingEdges.size() == 0) && (outgoingEdges.size() == 0)) {
                return new Marker("Imported Concept",
                    "The Imported Concept must have connections with others concepts into the model",
                    importedConcept.getId(), MarkerKind.ERROR);
            }

            return new Marker("Imported Concept", "This is a Valid Imported Concept", importedConcept.getId(),
                MarkerKind.INFO);

        }

        return new Marker("Imported Concept",
            "This is an Invalid Imported Concept, The inported concepts/concepts have to follow a logical order",
            importedConcept.getId(), MarkerKind.ERROR);

    }

}
