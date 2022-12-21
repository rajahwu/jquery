export interface Activity {
    activity: string,
    accessibility: number,
    type: string,
    participants: number,
    price: number,
    link: string,
    key: string
}

export default async function getActivity() {
    const res = await fetch('http://www.boredapi.com/api/activity/');
    const data: Activity = await res.json();
    return data;
}



