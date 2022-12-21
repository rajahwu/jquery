window.onload = async () => App();

// * Activity response object
// ?    activity: string,
// ?    accessibility: number,
// ?    type: string,
// ?    participants: number,
// ?    price: number,
// ?    link: string,
// ?    key: string

async function App() {
    const activity = await getActivity();
    AppContainer();
    const $appContainer = jQuery('#app');
    $(`<p>${activity.activity}</p>`)
        .appendTo($(`<p>${activity.type}</p>`, { class: "type" })
            .appendTo($(`<p>${activity.participants}</p>`, { class: "participants" })
                .appendTo($appContainer)
            ))
}

async function getActivity() {
    const res = await fetch('http://www.boredapi.com/api/activity/');
    const data = await res.json();
    return data;
}

function AppContainer() {
    const app = document.createElement('div');
    document.querySelector('body')?.append(app);
    app.id = "app";
    return app;
}

function MainLayout() {
    AppContainer()
}
