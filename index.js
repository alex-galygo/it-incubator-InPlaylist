// // data
// const title = 'it-incubator';
// const graduatesCount = 2000;
// const areYouChampion = true;
//
// // render
// let pageTitleElement = document.createElement('h1');
// pageTitleElement.innerText = title;
// document.body.append(pageTitleElement);
//
// let graduatesCountElement = document.createElement('input');
// graduatesCountElement.value = graduatesCount;
// document.body.append(graduatesCountElement);
//
// let areYouChampionElement = document.createElement('input');
// areYouChampionElement.type = 'checkbox';
// areYouChampionElement.checked = areYouChampion;
// document.body.append(areYouChampionElement);


// data
// const info = {
//     title: 'it-incubator',
//     graduatesCount: 2000,
//     areYouChampion: true
// }
//
// // render
// let pageTitleElement = document.createElement('h1');
// pageTitleElement.innerText = info.title;
// document.body.append(pageTitleElement);
//
// let graduatesCountElement = document.createElement('input');
// graduatesCountElement.value = info.graduatesCount;
// document.body.append(graduatesCountElement);
//
// let areYouChampionElement = document.createElement('input');
// areYouChampionElement.type = 'checkbox';
// areYouChampionElement.checked = info.areYouChampion;
// document.body.append(areYouChampionElement);

// data
// const info = {
//     title: 'it-incubator',
//     graduatesCount: 2000,
//     areYouChampion: true,
//     technologies: ['Front', 'Back', 'DevOps']
// }
//
// // render
//
// let technologiesElement = document.createElement('select');
// let option1 = document.createElement('option');
// option1.innerText = info.technologies[0];
// let option2 = document.createElement('option');
// option2.innerText = info.technologies[1];
// let option3 = document.createElement('option');
// option3.innerText = info.technologies[2];
// technologiesElement.append(option1);
// technologiesElement.append(option2);
// technologiesElement.append(option3);
// document.body.append(technologiesElement);

// data
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: [{
        id: 1,
        title: 'Front',
    },
        {
            id: 2,
            title: 'Back',
        },
        {
            id: 3,
            title: 'DevOps',
        },
    ]
}

// render

let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.technologies[1].title;
document.body.append(pageTitleElement);



