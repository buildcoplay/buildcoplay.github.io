import * as Locale from '../strings/index';
import '../css/EmailForm.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://coplay.us14.list-manage.com/subscribe/post?u=30105f007ac96e2ed907882b4&amp;id=f5cbf81e5a&amp;f_id=00f186e0f0";

const CustomForm = ({ status, message, onValidated }) => {
    console.log(status, message);
    let email, name, note;
    const submit = () =>
        email &&
        name &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value,
        });

    return (
        <div>
            {status === "sending" && <div style={{ color: "green" }}>sending...</div>}
            {status === "error" && (
                <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <div className='EmailForm-label'>Name</div>
            <input
                className = 'EmailForm-field'
                ref={node => (name = node)}
                type="text"
                placeholder="Name"
            />
            <div className='EmailForm-label'>Email Address</div>
            <input
                className = 'EmailForm-field'
                ref={node => (email = node)}
                type="email"
                placeholder="Email Address"
            />
            <div className='EmailForm-label'>Note</div>
            <input
                className = 'EmailForm-field EmailForm-note'
                ref={node => (note = node)}
                type="note"
                placeholder="Note"
            />
            <br />
            <button className='EmailForm-button' onClick={submit}>
                Submit
            </button>
        </div>
    );
};

// use the render prop and your custom form
function EmailForm() {
    return (
        <div id="contact" className='EmailForm-container'>
            <div>
                <h1>{Locale.EmailHeader}</h1>
                <p className='EmailForm-subtitle'>{Locale.EmailBody}</p>
                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />
            </div>

        </div>

    )
}

export default EmailForm;

