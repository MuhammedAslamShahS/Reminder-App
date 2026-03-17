import React, { useState } from "react";
import "./Reminder.css";

const Reminder = () => {
    const [reminder, setReminder] = useState([]);

    const [newReminder, setNewReminder] = useState("");

    const handleInputChange = (event) => {
        setNewReminder(event.target.value);
    };

    const handleAddReminder = () => {
        if (newReminder.trim()) {
            setReminder([...reminder, newReminder]);
            setNewReminder("")
        }


    };

    const handleDeleteReminder = (index) => {
        setReminder(reminder.filter((item, intemIndex) => intemIndex != index));
    };

    return (
        <div className="reminder-container">
            <h1>Reminder App</h1>

            <div className="input-container">
                <input type="text" placeholder="write your reminder text here..." maxLength={20} value={newReminder} onChange={handleInputChange} />

                <button className="reminder-add-btn" onClick={handleAddReminder}>
                    Add +
                </button>
            </div>

            {
                reminder.length > 0 ? <ul className="reminder-list">
                {reminder.map((data, index) => (
                    <li key={index}>
                        {data}{" "}
                        <button onClick={() => handleDeleteReminder(index)} className="reminder-delete-btn">
                            delete
                        </button>
                    </li>
                ))}
            </ul> : <><p style={{color:"rgb(48, 58, 126)", marginTop: "30px", fontSize: "20px", fontFamily: "sans-serif", paddingLeft: "2px"}}>no reminder available, write new ...</p></>
            }
        </div>
    );
};

export default Reminder;
