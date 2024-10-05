export default function MacroForm() {

    return (
        <form>
            <label htmlFor="age">Age</label>
            <input type="number" id="age"/>
            <label htmlFor="height">Height</label>
            <input type="number" id="height"/>
            <label htmlFor="weight">Weight</label>
            <input type="number" id="weight" />
        </form>
    )
}