import axios from 'axios'


async function addEventTest(day) {
    const newEvent = {
        date: day.format("YYYYMMDD"),
        title: day.title
    }

    const result = await axios.post("https://micaio.eliti.com.br/api-calendar/save.php", newEvent)
    console.log(result)
}

export default addEventTest