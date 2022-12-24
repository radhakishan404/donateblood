import { useState } from "react";
import axios from "axios";

function Donate() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [slots, setSlots] = useState("");
    const [message, setMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let payload = {
            name: name,
            mobile: mobile,
            slots: slots,
            message: message
        }

        let res = await axios.post("https://my-json-server.typicode.com/radhakishan404/donatebloodapi/user", payload);
        if (res.status === 201) {
            setFormSubmitted(true);
        } else {
            alert("Something went wrong");
        }
    }

    return (
        <section id="donate" class="contianer-fluid about-us">
            <div class="container">
                <div class="row session-title">
                    <h2 className="red">Donate Now</h2>
                    <p>Enter following details and select your own free slots now.</p>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-md-6 align-self-center">
                        <div class="form-card">
                            {
                                formSubmitted
                                    ?
                                    <div className="form-title">
                                        <h4 style={{
                                            padding: 2,
                                            color: "#fff",
                                            backgroundColor: "#28a745",
                                            borderColor: "#28a745"
                                        }}>Your details submitted successfully.</h4>
                                    </div>
                                    :
                                    null
                            }
                            <div class="form-body">
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={name} required placeholder="Enter Name" class="form-control" />
                                    <input type="text" onChange={(e) => setMobile(e.target.value)} defaultValue={mobile} required placeholder="Enter Mobile no" class="form-control" />
                                    <select class="form-control" onChange={(e) => setSlots(e.target.value)} value={slots} >
                                        <option value="">Select your free slots</option>
                                        <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                                        <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                                        <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
                                        <option value="01:00 PM - 02:00 PM">01:00 PM - 02:00 PM</option>
                                        <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                                        <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                                        <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                                        <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                                        <option value="06:00 PM - 07:00 PM">06:00 PM - 07:00 PM</option>
                                        <option value="07:00 PM - 08:00 PM">07:00 PM - 08:00 PM</option>
                                    </select>
                                    <textarea defaultValue={message} onChange={(e) => setMessage(e.target.value)} placeholder="Any important message or question you want to ask..." class="form-control" ></textarea>
                                    <button type="submit" class="btn btn-sm btn-primary w-100">Send Your Details</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Donate;