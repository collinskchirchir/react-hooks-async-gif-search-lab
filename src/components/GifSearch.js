import { useState } from "react";

function GifSearch({ onFormSubmit }){
    const [formData, setFormData] = useState("");

    function handleChange(event){
        setFormData(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        onFormSubmit(formData);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label
                        className="form-label"
                        style={{display: "block"}}
                    >
                        Enter a Search Term:
                    </label>
                    <input
                        className="form-control"
                        style={{display: "block"}}
                        type="text"
                        name="search"
                        value={formData}
                        onChange={handleChange}
                        placeholder="Search..."
                    />
                </div>

                <div>
                    <input
                        className="btn btn-success"
                        style={{display: "block", marginTop: "5px"}}
                        type="submit"
                        value="Submit"
                    />
                </div>
                
            </form>
        </div>
    )
}

export default GifSearch;