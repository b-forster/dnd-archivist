import './ModalContent.css';

function ModalContent() {
    return (
        <div class="modal-content">
            <header><h1>{'Roll a New Character'}</h1></header>
            <form>
                <label for="race-dropdown">Race:</label>
                <select id="race-dropdown" name="race">
                    <option value="human">Human</option>
                    <option value="orc">Orc</option>
                </select>
                <br />
                <label for="new-char-str">Strength: </label>
                <input type="integer" id="new-char-str" class="new-char-stat handwritten" size="3" name="stats[strength]"></input>
                <span class="stat-bonus" id="strength"></span>
                <button type="button" class="die-img" disabled>20</button>
                <input type="range" min="1" max="20"></input>
                <br />
                <button type="submit">Save & Close</button>
            </form>
        </div>
    );
}

export default ModalContent;
