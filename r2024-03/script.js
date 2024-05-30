let countofdi = 0, countofsp = 0, countofdp = 0, countofkh = 0, countofsus = 0, countofps = 0, countofng = 0, countofr = 0, countofan = 0,countofconfig=0,countofEKG=0;
let isdion = 0,isdion1=0, isspon = 0,isspon1=0, isdpon = 0,isdpon1=0, iskhon = 0,iskhon1 = 0, issson = 0,issson1 = 0, ispson = 0,ispson1 = 0, isngpon = 0,isngpon1 = 0, isron = 0,isron1 = 0, isaon = 0,isaon1 = 0,isotherson = 0,isotherson1 = 0,isEKGon=0,isEKGon1=0;
 
//for search
const searchInput = document.querySelector('.portal-search-field');


function loadContent(section) {
    // URL of the XML file
    var xmlUrl = 'home.xml'; // Replace with the actual URL of your XML file
    //alert('Welcome to o9 documentation site!');
    // Fetch the XML file
    $.ajax({
        url: xmlUrl,
        type: 'GET',
        dataType: 'xml',
        success: function (xmlDoc) {
            // Clear the container

            // if(section==="dataIntegrationContent"){
            // $("#dataIntegrationContent").empty();
            // }
            // if(section==="supplyplanning"){
            //  $("#supplyPlanningContent").empty();
            // }
            // $("#dataIntegrationContent").empty()
            // Find the specific section in the XML file
            var sectionContent = $(xmlDoc).find(section);
            var xmlrows = sectionContent.find("guide");
            console.log(xmlrows);
            // alert($(xmlrows));
            xmlrows.each(function () {
                if (this != "") {
                    var parent = $(this).find('parent').text();
                    var name = $(this).find('name').text();
                    var image = $(this).find('image').text();
                    var link = $(this).find('link').text();
                    // Create a new div for each s1 element
                    var div = $('<div class="item">').html(`
                        <a href="${link}" title="${name}">
                        <div style="display: flex;">
                        <div class="image"><img src="${image}"></div>
                        <div class="combination">
                        <div class="parent">${parent}</div>
                        <div class="name">${name}</div>
                        </div>
                        </div>
                        </a>
                    `);
                    // alert('one '+div);
                    // $("#dataIntegrationContent").append(div);
                    if (section === "dataIntegration" && countofdi < xmlrows.length) {
                        countofdi++;
                        $("#dataIntegrationContent").append(div);

                    }
                    if (section === "EKG" && countofEKG < xmlrows.length) {
                        countofEKG++;
                        $("#EKGContent").append(div);
                    }
                    if (section === "supplyplanning" && countofsp < xmlrows.length) {
                        countofsp++;
                        $("#supplyPlanningContent").append(div);
                    }
                    if (section === "demandPlanning" && countofdp < xmlrows.length) {
                        countofdp++;
                        $("#demandplanningcontent").append(div);
                    }
                    if (section === "knowledgehub" && countofkh < xmlrows.length) {
                        countofkh++;
                        $("#knowledgehubcontent").append(div);
                    }
                    if (section === "sustainability" && countofsus < xmlrows.length) {
                        countofsus++;
                        $("#sustainabilitysolutioncontent").append(div);
                    }
                    if (section === "productionscheduling" && countofps < xmlrows.length) {
                        countofps++;
                        $("#productionschedulingcontent").append(div);
                    }
                    if (section === "nextgeneration" && countofng < xmlrows.length) {
                        countofng++;
                        $("#nextgenrationcontent").append(div);
                    }
                    if (section === "retail" && countofr < xmlrows.length) {
                        countofr++;
                        $("#retailscontent").append(div);
                    }
                    if (section === "analytics" && countofan < xmlrows.length) {
                        countofan++;
                        $("#analyticscontent").append(div);
                    }
                    if (section === "config2" && countofconfig < xmlrows.length) {
                        countofconfig++;
                        $("#otherscontent").append(div);
                    }
                }
            });
            // alert('two '+$("#dataIntegrationContent").html());
            // console.log($("#dataIntegrationContent").html());
            // console.log(div);
            // Optionally, you can add a separator or header for each section
            // $("#dataIntegrationContent").append($('<div class="separator">').text(section + ' Details'));
            // $('#dataIntegrationContent').show(); // Ensure the container is visible
            //$('#container').css('display', 'flex');
        },
        error: function () {
            alert("An error occurred while fetching the XML file.");
        }
    });
}

//on click on any of the solution the content of allsolution will get hide

function hideallsolutioncontent() {
    const container = document.querySelector('.container-67');
    const rectangle = document.querySelector('.rectangle-42');
    const allSolutions = document.querySelector('.all-solutions');
    document.getElementById('allsolutionContent').style.display = 'none';
    container.style.backgroundColor = '#252525';
    rectangle.style.backgroundColor = '#252525'; // Default color
    allSolutions.style.display = '#0037FF';
    container.addEventListener('mouseover', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
}

//hide demand planning
function hidedemandplanningcontent() {
    const container = document.querySelector('.container-40');
    const rectangle = document.querySelector('.rectangle-43');
    const allSolutions = document.querySelector('.demand-planning');
    document.getElementById('demandplanningcontent').style.display = 'none';
    isdpon = 0;
    container.style.backgroundColor = '#252525';
    rectangle.style.backgroundColor = '#252525'; // Default color
    allSolutions.style.display = '#0037FF';
    container.addEventListener('mouseover', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
    container.addEventListener('mouseout', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
}

//hide supply planning
function hidesupplyplanningcontent() {
    const container = document.querySelector('.container-56');
    const rectangle = document.querySelector('.rectangle-45');
    const allSolutions = document.querySelector('.supply-planning');
    document.getElementById('supplyPlanningContent').style.display = 'none';
    isspon = 0;
    container.style.backgroundColor = '#252525';
    rectangle.style.backgroundColor = '#252525'; // Default color
    allSolutions.style.display = '#0037FF';
    container.addEventListener('mouseover', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
    container.addEventListener('mouseout', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
}
//hide data integration
function hidedataintegrationcontent() {
    const container = document.querySelector('.container-63');
    const rectangle = document.querySelector('.rectangle-41');
    const allSolutions = document.querySelector('.data-integration');
    document.getElementById('dataIntegrationContent').style.display = 'none';
    isdion = 0;
    container.style.backgroundColor = '#252525';
    rectangle.style.backgroundColor = '#252525'; // Default color
    allSolutions.style.display = '#0037FF';
    container.addEventListener('mouseover', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
    container.addEventListener('mouseout', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
}

//hide EKG config
function hideEKGcontent() {
    const container = document.querySelector('.containerEKG');
    const rectangle = document.querySelector('.rectangleEKG');
    const allSolutions = document.querySelector('.EKG');
    document.getElementById('EKGContent').style.display = 'none';
    isEKGon = 0;
    container.style.backgroundColor = '#252525';
    rectangle.style.backgroundColor = '#252525'; // Default color
    allSolutions.style.display = '#0037FF';
    container.addEventListener('mouseover', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
    container.addEventListener('mouseout', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
}
//hide knowledge hub
function hideknowledgehubcontent() {
    const container = document.querySelector('.container-42');
    const rectangle = document.querySelector('.rectangle-44');
    const allSolutions = document.querySelector('.knowledge-hub');
    document.getElementById('knowledgehubcontent').style.display = 'none';
    iskhon = 0;
    container.style.backgroundColor = '#252525';
    rectangle.style.backgroundColor = '#252525'; // Default color
    allSolutions.style.display = '#0037FF';
    container.addEventListener('mouseover', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
    container.addEventListener('mouseout', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
}
//hide sustainability solution
function hidesustainabilitysolutioncontent() {
    const container = document.querySelector('.container-54');
    const rectangle = document.querySelector('.rectangle-40');
    const allSolutions = document.querySelector('.sustainability-solutions');
    document.getElementById('sustainabilitysolutioncontent').style.display = 'none';
    issson = 0;
    container.style.backgroundColor = '#252525';
    rectangle.style.backgroundColor = '#252525'; // Default color
    allSolutions.style.display = '#0037FF';
    container.addEventListener('mouseover', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
    container.addEventListener('mouseout', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
}
//hide production scheduling
function hideproductionschedulingcontent() {
    const container = document.querySelector('.container-38');
    const rectangle = document.querySelector('.rectangle-46');
    const allSolutions = document.querySelector('.production-scheduling');
    document.getElementById('productionschedulingcontent').style.display = 'none';
    ispson = 0;
    container.style.backgroundColor = '#252525';
    rectangle.style.backgroundColor = '#252525'; // Default color
    allSolutions.style.display = '#0037FF';
    container.addEventListener('mouseover', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
    container.addEventListener('mouseout', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
}
//next generation procurement
function hidenxtgenerationprocurementcontent() {
    const container = document.querySelector('.container-49');
    const rectangle = document.querySelector('.rectangle-47');
    const allSolutions = document.querySelector('.next-generation-procurement');
    document.getElementById('nextgenrationcontent').style.display = 'none';
    isngpon = 0;
    container.style.backgroundColor = '#252525';
    rectangle.style.backgroundColor = '#252525'; // Default color
    allSolutions.style.display = '#0037FF';
    container.addEventListener('mouseover', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
    container.addEventListener('mouseout', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
}
//retail
function hideretailcontent() {
    const container = document.querySelector('.container-58');
    const rectangle = document.querySelector('.rectangle-48');
    const allSolutions = document.querySelector('.retail');
    document.getElementById('retailscontent').style.display = 'none';
    isron = 0;
    container.style.backgroundColor = '#252525';
    rectangle.style.backgroundColor = '#252525'; // Default color
    allSolutions.style.display = '#0037FF';
    container.addEventListener('mouseover', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
    container.addEventListener('mouseout', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
}
//analytics
function hideanalyticscontent() {
    const container = document.querySelector('.container-52');
    const rectangle = document.querySelector('.rectangle-49');
    const allSolutions = document.querySelector('.analytics');
    document.getElementById('analyticscontent').style.display = 'none';
    isaon = 0;
    container.style.backgroundColor = '#252525';
    rectangle.style.backgroundColor = '#252525'; // Default color
    allSolutions.style.display = '#0037FF';
    container.addEventListener('mouseover', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
    container.addEventListener('mouseout', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
}

function hideotherscontent() {
    const container = document.querySelector('.containerother');
    const rectangle = document.querySelector('.rectangleother');
    const allSolutions = document.querySelector('.others');
    document.getElementById('otherscontent').style.display = 'none';
    isotherson = 0;
    container.style.backgroundColor = '#252525';
    rectangle.style.backgroundColor = '#252525'; // Default color
    allSolutions.style.display = '#0037FF';
    container.addEventListener('mouseover', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
    container.addEventListener('mouseout', function () {

        container.style.backgroundColor = '#252525'; // Default color

    });
}


function to_display() {
    if (isdion === 0 && isEKGon===0 && isspon === 0 && isdpon === 0 && iskhon === 0 && issson === 0 && ispson === 0 && isngpon === 0 && isron === 0 && isaon === 0 && isotherson === 0 && searchInput.value.trim() === '') {
        const cont = document.querySelector('.container-67');
        const rect = document.querySelector('.rectangle-42');
        const allSol = document.querySelector('.all-solutions');
        const dataele = document.querySelector('.all-solutions');
        if (!cont || !rect || !allSol) {
            console.error('One or more elements not found.');
            return; // Exit the function if any element is not found
        }

        let isContvisi = false;

        document.getElementById('allsolutionContent').style.display = 'flex';
        ExportTosolution();
        // cont.style.backgroundColor = '#0037FF';
        rect.style.backgroundColor = '#0037FF';
        allSol.style.display = 'block';
        isContvisi = true;
        cont.addEventListener('mouseover', function () {
            if (isContvisi && rect.style.backgroundColor === '#0037FF') {
                cont.style.backgroundColor = '#0037FF'; // Default color
            }
        });
        cont.addEventListener('mouseout', function () {
            if (isContvisi) {
                cont.style.backgroundColor = '#252525'; // Default color
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container-67');
    const rectangle = document.querySelector('.rectangle-42');
    const allSolutions = document.querySelector('.all-solutions');
    const dataIntegrationElement = document.querySelector('.all-solutions');

    if (!container || !rectangle || !allSolutions) {
        console.error('One or more elements not found.');
        return; // Exit the function if any element is not found
    }

    let isContentVisible = false;

    document.getElementById('allsolutionContent').style.display = 'flex';
    ExportTosolution();
    // container.style.backgroundColor='blue';
    rectangle.style.backgroundColor = '#0037FF';
    allSolutions.style.display = 'block';
    isContentVisible = true;
    let isContentVisible_on_clik = false;
    container.addEventListener('click', function() {
        if (!isContentVisible_on_clik) {
            document.getElementById('allsolutionContent').style.display = 'flex';
            ExportTosolution();
            container.style.backgroundColor='#0037FF';
            rectangle.style.backgroundColor = '#0037FF';
            allSolutions.style.display = 'block';
            isContentVisible_on_clik = true;
            hidedemandplanningcontent();
            hidesupplyplanningcontent();
            hidedataintegrationcontent();
            hideEKGcontent();
            hideknowledgehubcontent();
            hidesustainabilitysolutioncontent();
            hideproductionschedulingcontent();
            hidenxtgenerationprocurementcontent();
            hideretailcontent();
            hideanalyticscontent();
            hideotherscontent();
        } else {
            // document.getElementById('allsolutionContent').style.display = 'none';
            // container.style.backgroundColor='#252525';
            // rectangle.style.backgroundColor = '#252525'; // Default color
            // allSolutions.style.display = '#0037FF';
            isContentVisible_on_clik = false;
        }
    });
    container.addEventListener('mouseover', function () {
        if ((isContentVisible || isContentVisible_on_clik) && rectangle.style.backgroundColor === '#0037FF') {
            container.style.backgroundColor = '#0037FF'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible || isContentVisible_on_clik) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });


    
});



//loadContent('dataIntegration');

//demandplanning

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container-40');
    const rectangle = document.querySelector('.rectangle-43');
    const allSolutions = document.querySelector('.demand-planning');
    const dataIntegrationElement = document.querySelector('.demand-planning');
    if (!container || !rectangle || !allSolutions) {
        console.error('One or more elements not found.');
        return; // Exit the function if any element is not found
    }

    let isContentVisible = false;

    container.addEventListener('click', function () {
        if (!isContentVisible) {
            isdpon = 1;
            isdpon1 = 1;
            //  alert(isdpon1);
            document.getElementById('demandplanningcontent').style.display = 'flex';
            searchInput.value = "";
            document.getElementById('contwrap').style.display = 'none';
            hideallsolutioncontent();
            loadContent('demandPlanning');
            container.style.backgroundColor = '#0037FF';
            rectangle.style.backgroundColor = '#0037FF';
            allSolutions.style.display = 'block';
            isContentVisible = true;
        } else {
            isdpon = 0;
            document.getElementById('demandplanningcontent').style.display = 'none';
            container.style.backgroundColor = '#252525';
            rectangle.style.backgroundColor = '#252525'; // Default color
            allSolutions.style.display = '#0037FF';
            isContentVisible = false;
            to_display();
        }
    });

    container.addEventListener('mouseover', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#0037FF'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
});

//Data integration

// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.querySelector('.container-63');
//     const rectangle = document.querySelector('.rectangle-41');
//     const allSolutions = document.querySelector('.data-integration');
//     const dataIntegrationElement = document.querySelector('.data-integration'); 
//     if (!container || !rectangle || !allSolutions) {
//         console.error('One or more elements not found.');
//         return; // Exit the function if any element is not found
//     }

//     let isContentVisible = false;

//     container.addEventListener('click', function() {
//         if (!isContentVisible) {   
//             isdion=1;

//     document.getElementById('dataIntegrationContent').style.display = 'flex';
//     // document.getElementById('allsolutionContent').style.display = 'none';
//             hideallsolutioncontent();
//             loadContent('dataIntegration');
//             container.style.backgroundColor='#0037FF';
//             rectangle.style.backgroundColor = '#0037FF';
//             allSolutions.style.display = 'block';
//             isContentVisible = true;
//         } else {
//             isdion=0;
//             document.getElementById('dataIntegrationContent').style.display = 'none';
//             container.style.backgroundColor='#252525';
//             rectangle.style.backgroundColor = '#252525'; // Default color
//             allSolutions.style.display = '#0037FF';
//             isContentVisible = false;
//             to_display();
//         }
//     });

//     container.addEventListener('mouseover', function(){
//         if (isContentVisible) {
//             container.style.backgroundColor = '#0037FF'; // Default color
//         }
//     });
//     container.addEventListener('mouseout', function() {
//         if (isContentVisible) {
//             container.style.backgroundColor = '#252525'; // Default color
//         }
//     });
// });

//supply planning
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container-56');
    const rectangle = document.querySelector('.rectangle-45');
    const allSolutions = document.querySelector('.supply-planning');
    const dataIntegrationElement = document.querySelector('.supply-planning');
    if (!container || !rectangle || !allSolutions) {
        console.error('One or more elements not found.');
        return; // Exit the function if any element is not found
    }

    let isContentVisible = false;

    container.addEventListener('click', function () {
        if (!isContentVisible) {
            isspon = 1;
            isspon1 = 1;
            document.getElementById('supplyPlanningContent').style.display = 'flex';
            searchInput.value = "";
            document.getElementById('contwrap').style.display = 'none';
            hideallsolutioncontent();
            loadContent('supplyplanning');
            container.style.backgroundColor = '#0037FF';
            rectangle.style.backgroundColor = '#0037FF';
            allSolutions.style.display = 'block';
            isContentVisible = true;
        } else {
            isspon = 0;
            document.getElementById('supplyPlanningContent').style.display = 'none';
            container.style.backgroundColor = '#252525';
            rectangle.style.backgroundColor = '#252525'; // Default color
            allSolutions.style.display = '#0037FF';
            isContentVisible = false;
            to_display();
        }
    });

    container.addEventListener('mouseover', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#0037FF'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
});

//data integration

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container-63');
    const rectangle = document.querySelector('.rectangle-41');
    const allSolutions = document.querySelector('.data-integration');
    const dataIntegrationElement = document.querySelector('.data-integration');
    if (!container || !rectangle || !allSolutions) {
        console.error('One or more elements not found.');
        return; // Exit the function if any element is not found
    }

    let isContentVisible = false;

    container.addEventListener('click', function () {
        if (!isContentVisible) {
            isdion = 1;
            isdion1 = 1;
            document.getElementById('dataIntegrationContent').style.display = 'flex';
            searchInput.value = "";
            document.getElementById('contwrap').style.display = 'none';
            // document.getElementById('allsolutionContent').style.display = 'none';
            hideallsolutioncontent();
            loadContent('dataIntegration');
            container.style.backgroundColor = '#0037FF';
            rectangle.style.backgroundColor = '#0037FF';
            allSolutions.style.display = 'block';
            isContentVisible = true;
        } else {
            isdion = 0;
            document.getElementById('dataIntegrationContent').style.display = 'none';
            container.style.backgroundColor = '#252525';
            rectangle.style.backgroundColor = '#252525'; // Default color
            allSolutions.style.display = '#0037FF';
            isContentVisible = false;
            to_display();
        }
    });

    container.addEventListener('mouseover', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#0037FF'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
});

//Ekg

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.containerEKG');
    const rectangle = document.querySelector('.rectangleEKG');
    const allSolutions = document.querySelector('.EKG');
    const dataIntegrationElement = document.querySelector('.EKG');
    if (!container || !rectangle || !allSolutions) {
        console.error('One or more elements not found.');
        return; // Exit the function if any element is not found
    }

    let isContentVisible = false;

    container.addEventListener('click', function () {
        if (!isContentVisible) {
            isEKGon = 1;
            isEKGon1 = 1;
            document.getElementById('EKGContent').style.display = 'flex';
            searchInput.value = "";
            document.getElementById('contwrap').style.display = 'none';
            // document.getElementById('allsolutionContent').style.display = 'none';
            hideallsolutioncontent();
            loadContent('EKG');
            container.style.backgroundColor = '#0037FF';
            rectangle.style.backgroundColor = '#0037FF';
            allSolutions.style.display = 'block';
            isContentVisible = true;
        } else {
            isEKGon = 0;
            document.getElementById('EKGContent').style.display = 'none';
            container.style.backgroundColor = '#252525';
            rectangle.style.backgroundColor = '#252525'; // Default color
            allSolutions.style.display = '#0037FF';
            isContentVisible = false;
            to_display();
        }
    });

    container.addEventListener('mouseover', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#0037FF'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
});

//demand planning

// document.addEventListener('DOMContentLoaded', function () {
//     const container = document.querySelector('.container-40');
//     const rectangle = document.querySelector('.rectangle-43');
//     const allSolutions = document.querySelector('.demand-planning');
//     const dataIntegrationElement = document.querySelector('.demand-planning');
//     if (!container || !rectangle || !allSolutions) {
//         console.error('One or more elements not found.');
//         return; // Exit the function if any element is not found
//     }

//     let isContentVisible = false;

//     container.addEventListener('click', function () {
//         if (!isContentVisible) {
//             isdpon = 1;
//             isdpon1=1;
//             document.getElementById('demandplanningcontent').style.display = 'flex';
//             searchInput.value = "";
//             document.getElementById('contwrap').style.display = 'none';
//             hideallsolutioncontent();
//             loadContent('demandPlanning');
//             container.style.backgroundColor = '#0037FF';
//             rectangle.style.backgroundColor = '#0037FF';
//             allSolutions.style.display = 'block';
//             isContentVisible = true;
//         } else {
//             isdpon = 0;
//             isdpon1 = 0;
//             document.getElementById('demandplanningcontent').style.display = 'none';
//             container.style.backgroundColor = '#252525';
//             rectangle.style.backgroundColor = '#252525'; // Default color
//             allSolutions.style.display = '#0037FF';
//             isContentVisible = false;
//             to_display();
//         }
//     });

//     container.addEventListener('mouseover', function () {
//         if (isContentVisible) {
//             container.style.backgroundColor = '#0037FF'; // Default color
//         }
//     });
//     container.addEventListener('mouseout', function () {
//         if (isContentVisible) {
//             container.style.backgroundColor = '#252525'; // Default color
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.querySelector('.container-56');
//     const rectangle = document.querySelector('.rectangle-45');
//     const allSolutions = document.querySelector('.supply-planning');

//     if (!container || !rectangle || !allSolutions) {
//         console.error('One or more elements not found.');
//         return; // Exit the function if any element is not found
//     }

//     let isContentVisible = false;

//     container.addEventListener('click', function() {
//         // loadContent(section)
//         if (!isContentVisible) {
//             document.getElementById('supplyPlanningContent').style.display = 'flex';
//             container.style.backgroundColor='#0037FF';
//             rectangle.style.backgroundColor = '#0037FF';
//             allSolutions.style.display = 'block';
//             isContentVisible = true;
//         } else {
//             document.getElementById('supplyPlanningContent').style.display = 'none';
//             container.style.backgroundColor='#252525';
//             rectangle.style.backgroundColor = '#252525'; // Default color
//             allSolutions.style.display = '#0037FF';
//             isContentVisible = false;
//         }
//     });
//     container.addEventListener('mouseover', function(){
//         if (isContentVisible) {
//             container.style.backgroundColor = '#0037FF'; // Default color
//         }
//     });
//     container.addEventListener('mouseout', function() {
//         if (isContentVisible) {
//             container.style.backgroundColor = '#252525'; // Default color
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.querySelector('.container-40');
//     const rectangle = document.querySelector('.rectangle-43');
//     const allSolutions = document.querySelector('.demand-planning');

//     if (!container || !rectangle || !allSolutions) {
//         console.error('One or more elements not found.');
//         return; // Exit the function if any element is not found
//     }

//     let isContentVisible = false;

//     container.addEventListener('click', function() {
//         if (!isContentVisible) {

//             document.getElementById('demandplanningcontent').style.display = 'flex';
//             console.log("clicked");
//             container.style.backgroundColor='#0037FF';
//             rectangle.style.backgroundColor = '#0037FF';
//             allSolutions.style.display = 'flex';
//             isContentVisible = true;
//         } else {
//             document.getElementById('demandplanningcontent').style.display = 'none';
//             container.style.backgroundColor='#252525';
//             rectangle.style.backgroundColor = '#252525'; // Default color
//             allSolutions.style.display = '#0037FF';
//             isContentVisible = false;
//         }
//     });
//     container.addEventListener('mouseover', function(){
//         if (isContentVisible) {
//             container.style.backgroundColor = '#0037FF'; // Default color
//         }
//     });
//     container.addEventListener('mouseout', function() {
//         if (isContentVisible) {
//             container.style.backgroundColor = '#252525'; // Default color
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container-42');
    const rectangle = document.querySelector('.rectangle-44');
    const allSolutions = document.querySelector('.knowledge-hub');
    const dataIntegrationElement = document.querySelector('.knowledge-hub');
    if (!container || !rectangle || !allSolutions) {
        console.error('One or more elements not found.');
        return; // Exit the function if any element is not found
    }

    let isContentVisible = false;

    container.addEventListener('click', function () {
        if (!isContentVisible) {
            iskhon = 1;
            iskhon1=1;
            document.getElementById('knowledgehubcontent').style.display = 'flex';
            searchInput.value = "";
            document.getElementById('contwrap').style.display = 'none';
            hideallsolutioncontent();
            loadContent('knowledgehub');
            container.style.backgroundColor = '#0037FF';
            rectangle.style.backgroundColor = '#0037FF';
            allSolutions.style.display = 'flex';
            isContentVisible = true;
        } else {
            iskhon = 0;
            document.getElementById('knowledgehubcontent').style.display = 'none';
            container.style.backgroundColor = '#252525';
            rectangle.style.backgroundColor = '#252525'; // Default color
            allSolutions.style.display = '#0037FF';
            isContentVisible = false;
            to_display();
        }
    });
    container.addEventListener('mouseover', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#0037FF'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container-54');
    const rectangle = document.querySelector('.rectangle-40');
    const allSolutions = document.querySelector('.sustainability-solutions');
    const dataIntegrationElement = document.querySelector('.data-integration');
    if (!container || !rectangle || !allSolutions) {
        console.error('One or more elements not found.');
        return; // Exit the function if any element is not found
    }

    let isContentVisible = false;

    container.addEventListener('click', function () {
        if (!isContentVisible) {
            issson = 1;
            issson1=1;
            document.getElementById('sustainabilitysolutioncontent').style.display = 'flex';
            searchInput.value = "";
            document.getElementById('contwrap').style.display = 'none';
            hideallsolutioncontent();
            loadContent('sustainability');
            container.style.backgroundColor = '#0037FF';
            rectangle.style.backgroundColor = '#0037FF';
            allSolutions.style.display = 'flex';
            isContentVisible = true;
        } else {
            issson = 0;
            document.getElementById('sustainabilitysolutioncontent').style.display = 'none';
            container.style.backgroundColor = '#252525';
            rectangle.style.backgroundColor = '#252525'; // Default color
            allSolutions.style.display = '#0037FF';
            isContentVisible = false;
            to_display();
        }
    });
    container.addEventListener('mouseover', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#0037FF'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container-38');
    const rectangle = document.querySelector('.rectangle-46');
    const allSolutions = document.querySelector('.production-scheduling');
    const dataIntegrationElement = document.querySelector('.data-integration');
    if (!container || !rectangle || !allSolutions) {
        console.error('One or more elements not found.');
        return; // Exit the function if any element is not found
    }

    let isContentVisible = false;

    container.addEventListener('click', function () {
        if (!isContentVisible) {
            ispson = 1;
            ispson1=1;
            document.getElementById('productionschedulingcontent').style.display = 'flex';
            searchInput.value = "";
            document.getElementById('contwrap').style.display = 'none';
            hideallsolutioncontent();
            loadContent('productionscheduling');
            container.style.backgroundColor = '#0037FF';
            rectangle.style.backgroundColor = '#0037FF';
            allSolutions.style.display = 'flex';
            isContentVisible = true;
        } else {
            ispson = 0;
            document.getElementById('productionschedulingcontent').style.display = 'none';
            container.style.backgroundColor = '#252525';
            rectangle.style.backgroundColor = '#252525'; // Default color
            allSolutions.style.display = '#0037FF';
            isContentVisible = false;
            to_display();
        }
    });
    container.addEventListener('mouseover', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#0037FF'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container-49');
    const rectangle = document.querySelector('.rectangle-47');
    const allSolutions = document.querySelector('.next-generation-procurement');
    const dataIntegrationElement = document.querySelector('.next-generation-procurement');
    if (!container || !rectangle || !allSolutions) {
        console.error('One or more elements not found.');
        return; // Exit the function if any element is not found
    }

    let isContentVisible = false;

    container.addEventListener('click', function () {
        if (!isContentVisible) {
            isngpon = 1;
            isngpon1=1;
            document.getElementById('nextgenrationcontent').style.display = 'flex';
            searchInput.value = "";
            document.getElementById('contwrap').style.display = 'none';
            hideallsolutioncontent();
            loadContent('nextgeneration');
            container.style.backgroundColor = '#0037FF';
            rectangle.style.backgroundColor = '#0037FF';
            allSolutions.style.display = 'flex';
            isContentVisible = true;
        } else {
            isngpon = 0;
            document.getElementById('nextgenrationcontent').style.display = 'none';
            container.style.backgroundColor = '#252525';
            rectangle.style.backgroundColor = '#252525'; // Default color
            allSolutions.style.display = '#0037FF';
            isContentVisible = false;
            to_display();
        }
    });
    container.addEventListener('mouseover', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#0037FF'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container-58');
    const rectangle = document.querySelector('.rectangle-48');
    const allSolutions = document.querySelector('.retail');
    const dataIntegrationElement = document.querySelector('.retail');
    if (!container || !rectangle || !allSolutions) {
        console.error('One or more elements not found.');
        return; // Exit the function if any element is not found
    }

    let isContentVisible = false;

    container.addEventListener('click', function () {
        if (!isContentVisible) {
            isron = 1;
            isron1=1;
            document.getElementById('retailscontent').style.display = 'flex';
            searchInput.value = "";
            document.getElementById('contwrap').style.display = 'none';
            hideallsolutioncontent();
            loadContent('retail');
            container.style.backgroundColor = '#0037FF';
            rectangle.style.backgroundColor = '#0037FF';
            allSolutions.style.display = 'flex';
            isContentVisible = true;
        } else {
            isron = 0;
            document.getElementById('retailscontent').style.display = 'none';
            container.style.backgroundColor = '#252525';
            rectangle.style.backgroundColor = '#252525'; // Default color
            allSolutions.style.display = '#0037FF';
            isContentVisible = false;
            to_display();
        }
    });
    container.addEventListener('mouseover', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#0037FF'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container-52');
    const rectangle = document.querySelector('.rectangle-49');
    const allSolutions = document.querySelector('.analytics');
    const dataIntegrationElement = document.querySelector('.analytics');

    if (!container || !rectangle || !allSolutions) {
        console.error('One or more elements not found.');
        return; // Exit the function if any element is not found
    }

    let isContentVisible = false;

    container.addEventListener('click', function () {
        if (!isContentVisible) {
            isaon = 1;
            isaon1=1;
            document.getElementById('analyticscontent').style.display = 'flex';
            searchInput.value = "";
            document.getElementById('contwrap').style.display = 'none';
            hideallsolutioncontent();
            loadContent('analytics');
            container.style.backgroundColor = '#0037FF';
            rectangle.style.backgroundColor = '#0037FF';
            allSolutions.style.display = 'flex';
            isContentVisible = true;
        } else {
            isaon = 0;
            document.getElementById('analyticscontent').style.display = 'none';
            container.style.backgroundColor = '#252525';
            rectangle.style.backgroundColor = '#252525'; // Default color
            allSolutions.style.display = '#0037FF';
            isContentVisible = false;
            to_display();
        }
    });
    container.addEventListener('mouseover', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#0037FF'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.containerother');
    const rectangle = document.querySelector('.rectangleother');
    const allSolutions = document.querySelector('.others');
    const dataIntegrationElement = document.querySelector('.others');

    if (!container || !rectangle || !allSolutions) {
        console.error('One or more elements not found.');
        return; // Exit the function if any element is not found
    }

    let isContentVisible = false;

    container.addEventListener('click', function () {
        if (!isContentVisible) {
            isotherson = 1;
            isotherson1=1;
            document.getElementById('otherscontent').style.display = 'flex';
            searchInput.value = "";
            document.getElementById('contwrap').style.display = 'none';
            hideallsolutioncontent();
            loadContent('config2');
            container.style.backgroundColor = '#0037FF';
            rectangle.style.backgroundColor = '#0037FF';
            allSolutions.style.display = 'flex';
            isContentVisible = true;
        } else {
            isotherson = 0;
            document.getElementById('otherscontent').style.display = 'none';
            container.style.backgroundColor = '#252525';
            rectangle.style.backgroundColor = '#252525'; // Default color
            allSolutions.style.display = '#0037FF';
            isContentVisible = false;
            to_display();
        }
    });
    container.addEventListener('mouseover', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#0037FF'; // Default color
        }
    });
    container.addEventListener('mouseout', function () {
        if (isContentVisible) {
            container.style.backgroundColor = '#252525'; // Default color
        }
    });
});

//  function hideAllContentSections() {
//     document.getElementById('dataIntegrationContent').style.display = 'none';
//     document.getElementById('supplyPlanningContent').style.display = 'none';
//     document.getElementById('demandPlanningContent').style.display = 'none';
//  }
let countofallsol = 0;
function ExportTosolution() {
    // URL of the XML file
    var xmlUrl = 'home.xml'; // Replace with the actual URL of your XML file

    // Fetch the XML file
    $.ajax({
        url: xmlUrl,
        type: 'GET',
        dataType: 'xml',
        success: function (xmlDoc) {
            // Splitting of root elements in the xml file    
            var rootElements = $(xmlDoc).children();
            var container = $("#allsolutionContent"); // Container for the divs
            rootElements.each(function () {
                var detailType = $(this).prop('nodeName'); // Get the type of detail (e.g., Employeedetails, Studentdetails, Teacherdetails)
                var xmlrows = $(this).find("guide");
                xmlrows.each(function () {
                    if (this != "") {
                        var parent = $(this).find('parent').text();
                        var name = $(this).find('name').text();
                        var image = $(this).find('image').text();
                        var link = $(this).find('link').text();
                        // Create a new div for each s1 element
                        var div = $('<div class="item">').html(`
                        <a href="${link}" title="${name}">
                        <div style="display: flex;">
                        <div class="image"><img src="${image}"></div>
                        <div class="combination">
                        <div class="parent">${parent}</div>
                        <div class="name">${name}</div>
                        </div>
                        </div>
                        </a>    
                        `);
                        // Append the div to the container
                        if (countofallsol < xmlrows.length) {
                            container.append(div);
                            countofallsol++;
                        }
                    }
                });
                // Optionally, you can add a separator or header for each type of detail
                // container.append($('<div class="separator">').text(detailType + ' Details'));
            });
            $('#allsolutionContent').show(); // Ensure the container is visible
        },
        error: function () {
            alert("An error occurred while fetching the XML file.");
        }
    });
}



//dropdown of release version

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('sm-1711626590482459-1').addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent the default action of the link
//         var dropdownMenu = document.getElementById('sm-1711626590482459-2');
//         if (dropdownMenu.style.display === 'none') {
//             dropdownMenu.style.display = 'flex';
//             this.setAttribute('aria-expanded', 'true');
//         } 
//         else {
//             dropdownMenu.style.display = 'none';
//             this.setAttribute('aria-expanded', 'false');
//         }
//     });
// });

// function hidedropdown( is_check ){
//     // document.addEventListener('DOMContentLoaded', function () {
//         console.log("checking the id ",is_check)
//             if(!is_check){
//                 var dropdownMenu = document.getElementById('sm-1711626590482459-2');
//                 dropdownMenu.style.display ='none'; 
//             }
            
        
//     // });
// }

//search bar.
// alert(searchInput);
// console.log(searchInput.value);


// console.log(searchInput.value);


document.addEventListener('DOMContentLoaded', function () {
    // Get the search input and the two containers
    //const searchInput = document.querySelector('.portal-search-field');
    const contwrap = document.getElementById('contwrap');
    const allsol = document.getElementById('allsolutionContent');

    // Function to toggle visibility based on search input
    function toggleVisibility() {
        if (searchInput.value.trim() !== '') {
            // If there's input, show contwrap and hide allsol
            // alert(searchInput.value);
            contwrap.style.display = 'block';
            // allsol.style.display = 'none';
            hideallsolutioncontent();
            hidedemandplanningcontent();
            hidesupplyplanningcontent();
            hidedataintegrationcontent();
            hideEKGcontent();
            hideknowledgehubcontent();
            hidesustainabilitysolutioncontent();
            hideproductionschedulingcontent();
            hidenxtgenerationprocurementcontent();
            hideretailcontent();
            hideanalyticscontent();
            hideotherscontent();
        } else {
            // If there's no input, hide contwrap and show allsol
            contwrap.style.display = 'none';
            allsol.style.display = 'block';
            to_display();
            // hideallsolutioncontent();
        }
    }

    // Add event listener to the search input
    searchInput.addEventListener('input', toggleVisibility);

    // Initially, if there's no input, hide contwrap and show allsol
    toggleVisibility();
});


    //sticky siedebar and navbar
// window.addEventListener('load', adjustSidebarTop);
// window.addEventListener('resize', adjustSidebarTop);

// function adjustSidebarTop() {
//  const navbar = document.querySelector('.container-64');
//  const sidebar = document.querySelector('.container-60');
//  const navbarHeight = navbar.offsetHeight;

//  sidebar.style.top = `${navbarHeight}px`;
// }

//     document.addEventListener('DOMContentLoaded',function(){
//     //var searchBar = document.querySelector('.portal-search-field');
//     var chk=0;
//     var addpre='';
//     searchInput.addEventListener('input', function(e) {
         
//         // Check if the input is not empty
//         // isdpon1=0;
//         if(isdpon1===1){
//             // addpre='';
//             addpre =addpre + 'Demand planning ';
//             isdpon1=0;
//             // alert('yes');
//         }
//         if(isspon1===1){
//             //addpre='';
//             addpre=addpre + 'Supply Planning ';
//             isspon1=0;
//         }
//         if(isdion1===1){
//             //addpre='';
//             addpre=addpre + 'Data Integration ';
//             isdion1=0;
//         }
//         if(isEKGon1===1){
//             //addpre='';
//             addpre=addpre + 'EKG Configurator ';
//             isEKGon1=0;
//         }
//         if(iskhon1===1){
//             //addpre='';
//             addpre=addpre + 'Knowledge Hub ';
//             iskhon1=0;
//         }
//         if(issson1===1){
//             //addpre='';
//             addpre=addpre + 'Sustainability Solution ';
//             issson1=0;
//         }
//         if(ispson1===1){
//             //addpre='';
//             addpre=addpre + 'Production Scheduling ';
//             ispson1=0;
//         }
//         if(isngpon1===1){
//             //addpre='';
//             addpre= addpre + 'Next Generation ';
//             isngpon1=0;
//         }
//         if(isron1===1){
//             //addpre='';
//             addpre= addpre + 'Retail ';
//             isron1=0;
//         }
//         if(isaon1===1){
//             //addpre='';
//             addpre= addpre + 'analytics ';
//             isaon1=0;
//         }
//         if(isotherson1===1){
//             //addpre='';
//             addpre=addpre + 'Config ';
//             isotherson1=0;
//         }
//         if (e.target.value.trim()) {
//             if(chk===0){
//             e.target.value=addpre + e.target.value;
//             }
//             chk++;
             
//         }
//         if(e.target.value.trim()===''){
//             addpre='';
//             chk=0;
//         }
//     });
// });