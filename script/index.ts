import { formatDistanceToNow } from 'date-fns';
import { Comic } from './types';

async function fetchComic(): Promise<void> {
    const email = 't.farizunov@innopolis.university';
    const params = new URLSearchParams({ email });

    try {
        const responseId = await fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);
        const comicId = await responseId.text();

        const responseComic = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        const comicData: Comic = await responseComic.json();

        const comicDiv = document.getElementById('comic');
        if (comicDiv) {
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
            const comicDate = new Date(`${comicData.year}-${comicData.month}-${comicData.day}`);
            const formattedDate = comicDate.toLocaleDateString();
            const timeAgo = formatDistanceToNow(comicDate, { addSuffix: true });
            date.textContent = `Published: ${formattedDate} (${timeAgo})`;
            date.classList.add('comic__date');
            comicContent.appendChild(date);
        }

        const loader = document.querySelector(".loader");
        if (loader) {
            loader.classList.add("loader-hidden");

            loader.addEventListener("transitionend", () => {
                loader.remove();
            });
        }
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener("load", () => {
    fetchComic();
});

document.getElementById('scrollToProjects')?.addEventListener('click', function() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
});
