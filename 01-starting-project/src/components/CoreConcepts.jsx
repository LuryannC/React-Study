import CoreConcept from "./CoreConcept.jsx";
import {CORE_CONCEPTS} from "../data.js";
import Section from "./Section.jsx";

export default function CoreConcepts() {

    const numberOfCoreConcepts = CORE_CONCEPTS.length;

    const coreConceptComponents = Array.from({
        length: numberOfCoreConcepts
    }, (_, index) => (<CoreConcept key={index} {...CORE_CONCEPTS[index]}/>));

    return (
        <section id='core-concepts'>
            <h2>Time to get started!</h2>
            <ul>
                {coreConceptComponents}
                {/* {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}/>))} */}
                {/* {CORE_CONCEPTS.map(conceptItem => <CoreConcept {...conceptItem} />)} */}
            </ul>
        </section>
    )
}