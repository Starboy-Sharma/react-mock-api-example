import { useState } from "react";
import { saveUser } from "../../services/user";

export default function AddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    if (!email || !name || !position) {
      console.warn("Inputs are not valid");
      return;
    }

    const post_data = {
      name,
      email,
      Position: position,
    };

    const res = await saveUser(post_data);
    console.log(res);

    setName("");
    setEmail("");
    setPosition("");

    alert("User save successfully! ");
  };

  return (
    <div className="row">
      <h4 className="text-center"> Save User </h4>
      <form onSubmit={handleSubmit} className="col s12">
        <div className="input-field col s6">
          <input
            type="text"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-field col s6">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-field col s6">
          <input
            type="text"
            required
            placeholder="Designation"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>

        <div className="input-field col s12">
          <button type="submit" className="btn btn-default waves-effect">
            {" "}
            Save{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
