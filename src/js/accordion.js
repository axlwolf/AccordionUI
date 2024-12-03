export const Accordion = (() => {
    console.log("Accordion");
    /*
    *   DOM refs
    *
    * */
    const $accordion = document.querySelector(".accordion");
    const $headers = document.querySelector(".headers");
    const $headerTitle = $headers.querySelector(".title");
    const $headerSubtitle = $headers.querySelector(".subtitle");

    /*
    *   Variables
    * */
    let accordionData;

    const init = () => {
        console.log("Init app");
        fetchData();
    };

    let renderAccordion = async (accordionData) => {
        let accordionItems = '';
        accordionData.forEach((item, index) => {
            accordionItems += `
                <section class="accordion-section" data-index="${index}">
                    <h2 class="accordion-header">
                        ${item.question}
                        <i class="fas fa-chevron-down"></i>
                    </h2>
                    <div class="accordion-content hidden">${item.answer}</div>
                </section>
            `;
        });
        $accordion.innerHTML = accordionItems;
        eventHandlers();
    }

    const eventHandlers = () => {
        $accordion.addEventListener("click", (e) => {
            let $headerElement = e.target.closest(".accordion-header");
            if ($headerElement) {
                let $section = $headerElement.closest(".accordion-section");
                let index = $section.getAttribute("data-index");
                toggleAccordionContent(index);
            }
        });
    };

    const fetchData = async () => {
        try {
            const response = await fetch('./js/accordion.json');
            const data = await response.json();
            console.log(data);
            const { items, ...rest } = data;
            const {title, subtitle} = rest;
            accordionData = items;
            console.log({ items });
            console.log({$headerTitle, $headerSubtitle});
            $headerTitle.innerHTML = title;
            $headerSubtitle.innerHTML = subtitle;
            await renderAccordion(accordionData);
        } catch (error) {
            console.error('Error fetching the FAQs:', error);
        }
    }

    const toggleAccordionContent = (index) => {
        $accordion.querySelectorAll(".accordion-section").forEach((section, sectionIndex) => {
            let content = section.querySelector(".accordion-content");
            let chevron = section.querySelector('.fas');
            if (sectionIndex === +index) {
                content.classList.toggle("hidden");
                if (content.classList.contains("hidden")) {
                    chevron.classList.remove("fa-chevron-up");
                    chevron.classList.add("fa-chevron-down");
                } else {
                    chevron.classList.remove("fa-chevron-down");
                    chevron.classList.add("fa-chevron-up");
                }
            } else {
                content.classList.add("hidden");
                chevron.classList.remove("fa-chevron-up");
                chevron.classList.add("fa-chevron-down");
            }
        });
    };

    return {
        init,
    };
})();
