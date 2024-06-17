async function fetchComic() {
    const email = 't.farizunov@innopolis.university';
    const params = new URLSearchParams({email});

    try {
        const responseId = await fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);
        const comicId = await responseId.text();

        const responseComic = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        const comicData = await responseComic.json();

        const comicDiv = document.getElementById('comic');
        
        const title = document.createElement('h1');
        title.textContent = comicData.safe_title;
        title.classList.add('comic__title');
        comicDiv.appendChild(title);

        const comicContent = document.createElement('div');
        comicContent.classList.add("comic__content");
        comicDiv.appendChild(comicContent);

        const image = document.createElement('img');
        image.src = comicData.img;
        image.alt = comicData.alt;
        image.classList.add('comic__img');
        comicContent.appendChild(image);

        const date = document.createElement('p');
        const comicDate = new Date(`${comicData.year}-${comicData.month}-${comicData.day}`).toLocaleDateString();
        date.textContent = `Published: ${comicDate}`
        date.classList.add('comic__date');
        comicContent.appendChild(date);

        const loader = document.querySelector(".loader");
        loader.classList.add("loader-hidden");

        loader.addEventListener("transitionend", () => {
            loader.remove();
        });
    }
    catch (error) {
        console.log(error);
    }
}

window.addEventListener("load", () => {
    fetchComic();
});
