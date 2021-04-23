import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const Form = (props) => {
  const { form, setForm } = props;
  let history = useHistory();

  const [validation, setValidation] = useState({});
  function onInputChange(e) {
    let _form = { ...form };
    _form[e.target.name] = e.target.value;
    setForm(_form);
  }

  const setValidationValue = () => {
    return {
      password: true,
      email: true,
      phone: true,
      dob: true,
    }
  }

  useEffect(() => {
    setValidation(setValidationValue());
  }, [])

  function onSubmit(e) {
    e.preventDefault();
    setValidation(setValidationValue());
    let vali = setValidationValue();


    if (!(/[0-9]{9}/g.test(form.phone))) {
      vali.phone = false;
    }

    if (form.password.length < 6) {
      vali.password = false;
    }
    // eslint-disable-next-line no-useless-escape
    if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(form.email.toLowerCase()))
    ) {
      vali.email = false;
    }

    // eslint-disable-next-line no-useless-escape
    if (!(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(form.dob))) {
      vali.dob = false;
    }
    setValidation(vali);
    if (!vali.email || !vali.phone || !vali.password || !vali.dob)
      return;

    history.push("/confirm");
  };

  return (
    <div className="container">

      {
        <form className="container" style={{ marginTop: '40px' }} onSubmit={onSubmit}>
          <h2>Register</h2>
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              size="100"
              value={form.name}
              onChange={onInputChange} required />
          </div>

          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"
              value={form.email}
              onChange={onInputChange}
              placeholder="Enter Email"
              required />
            <small className="error">{validation.email ? "" : "Email address is invalid"}</small>
          </div>
          <div className="form-item">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone"
              value={form.phone}
              onChange={onInputChange}
              placeholder="Enter phone eg.1231231234"
              required />
            <small className="error">{validation.phone ? "" : "Phone No. Must be format xxxxxxxxxx"}</small>
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"
              autoComplete="off"
              value={form.password}
              onChange={onInputChange}
              placeholder="Enter Password"
              required />
            <small className="error">{validation.password ? "" : "Password Must be more than 6 characters"}</small>
          </div>
          <div className="form-item">
            <label htmlFor="dob">Datebirth</label>
            <input type="text" id="dob" name="dob"
              value={form.dob}
              onChange={onInputChange}
              placeholder="Date of birth eg. dd/mm/yyyy"
              required />
            <small className="error">{validation.dob ? "" : "Invalid Date format dd/mm/yyyy"}</small>
          </div>
          <div className="form-item">
            <label htmlFor="gender">Select Your Gender</label>
            <select name="gender" onChange={onInputChange} id="gender" required>
              <option value="">-- select one --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="religion">What is your religion?</label>
            <select name="religion" onChange={onInputChange} id="religion">
              <option value="">-- select one --</option>
              <option value="African Traditional & Diasporic">African Traditional & Diasporic</option>
              <option value="Agnostic">Agnostic</option>
              <option value="Atheist">Atheist</option>
              <option value="Baha'i">Baha'i</option>
              <option value="Buddhism">Buddhism</option>
              <option value="Cao Dai">Cao Dai</option>
              <option value="Chinese traditional religion">Chinese traditional religion</option>
              <option value="Christianity">Christianity</option>
              <option value="Hinduism">Hinduism</option>
              <option value="Islam">Islam</option>
              <option value="Jainism">Jainism</option>
              <option value="Juche">Juche</option>
              <option value="Judaism">Judaism</option>
              <option value="Neo-Paganism">Neo-Paganism</option>
              <option value="Nonreligious">Nonreligious</option>
              <option value="Rastafarianism">Rastafarianism</option>
              <option value="Secular">Secular</option>
              <option value="Shinto">Shinto</option>
              <option value="Sikhism">Sikhism</option>
              <option value="Spiritism">Spiritism</option>
              <option value="Tenrikyo">Tenrikyo</option>
              <option value="Unitarian-Universalism">Unitarian-Universalism</option>
              <option value="Zoroastrianism">Zoroastrianism</option>
              <option value="primal-indigenous">primal-indigenous</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <label>What is the highest degree or level of school you have completed?</label>
          <br />
          <br />
          <div className="form-item">
            <input type="radio" onChange={onInputChange} className="ml-3" name="edu" id="high" value="High school graduate, diploma or the equivalent" />
            <label className="ml-3" htmlFor="high">High school graduate, diploma or the equivalent</label>
          </div>
          <div className="form-item">
            <input type="radio" onChange={onInputChange} className="ml-3" name="edu" id="associate" value="Associate degree" />
            <label className="ml-3" htmlFor="associate">Associate degree</label>
          </div>
          <div className="form-item">
            <input type="radio" onChange={onInputChange} className="ml-3" name="edu" id="bachelor" value="Bachelor’s degree" />
            <label className="ml-3" htmlFor="bachelor">Bachelor’s degree</label>
          </div>
          <div className="form-item">
            <input type="radio" onChange={onInputChange} className="ml-3" name="edu" id="master" value="Master’s degree" />
            <label className="ml-3" htmlFor="master">Master’s degree</label>
          </div>

          <input type="submit" className="btn btn-sub" value="Submit" />
        </form>

      }
    </div>
  )
}

Form.propTypes = {
  form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired
}

export default Form
