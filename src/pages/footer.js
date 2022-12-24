import { useState } from "react";
import axios from "axios";


function Footer() {
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
            setName("");
            setMobile("");
            setSlots("");
            setMessage("");
        } else {
            alert("Something went wrong");
        }
    }

    return (
        <footer id="contact" class="container-fluid">
            <div class="container">

                <div class="row content-ro">
                    <div class="col-lg-4 col-md-12 footer-contact">
                        <h2>Contact Informatins</h2>
                        <div class="address-row">
                            <div class="icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="detail">
                                <p>Old Raviraj Complex, Jesal Park, <br /> Bhayander East, Thane - 401105</p>
                            </div>
                        </div>
                        <div class="address-row">
                            <div class="icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="detail">
                                <p>Kashish Gupta <br />+91 7045988319</p>
                            </div>
                        </div>
                        <div class="address-row">
                            <div class="icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="detail">
                                <p>Yash Kothari <br />+91 9769403162</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 footer-links">
                        <div class="row no-margin mt-2">
                        <iframe src="//maps.google.com/maps?q=19.315735, 72.855931&z=15&output=embed"></iframe>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 footer-form">
                        <div class="form-card">
                            <div class="form-title">
                                <h4>Quickly Add Your Details here...</h4>
                            </div>
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
        </footer>
    )
}

export default Footer;