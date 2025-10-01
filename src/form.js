import React, { useState } from 'react';
import './styles/App.css';

function MyForm() {
  const [formData, setFormData] = useState({
    id: '',
    startdate: '',
    firstName: '',
    middleName: '',
    lastName: '',
    ssn: '',
    dob: '',
    homeaddress: '',
    birthplace: '',
    gender: '',
    ageLimitations: '',
    ageSpecification: '',
    ethnicity: '',
    languages: '',
    cprCertified: '',
    hospitalPrivileges: '',
    hospital: '',
    npi1: '',
    caqh: '',
    boardCertified: '',
    boardDate: '',
    boardEligible: '',
    adaMember: '',
    specialty: '',
    epiExi: '',
    genEd: '',
    genAdd: '',
    genStart: '',
    genEnd: '',
    specEd: '',
    specAdd: '',
    specStart: '',
    specEnd: '',
    genResEd: '',
    genResAdd: '',
    genResStart: '',
    genResEnd: '',
    specResEd: '',
    specResAdd: '',
    specResStart: '',
    specResEnd: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Application:', formData);
    // Handle data submission here (e.g., send to API)
  };

  return (
    
    <form>
      <h2>Application Form</h2>
      <div className="application-form" onSubmit={handleSubmit}>

	<h3>Practice Application</h3>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>

<label>
        Office NPI:
        <input type="text" name="npi2" value={formData.npi2} onChange={handleChange} />
      </label>

<label>
        Phone Number:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </label>

      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>

      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>

      <label>
        State:
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
      </label>

      <label>
        ZIP Code:
        <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
      </label>
</div>
<div className="application-form" onSubmit={handleSubmit}>
	<h3>Dentist Information</h3>
  <div className="row-form-group">
	<label>
        ID:
        <input type="text" name="id" value={formData.id} onChange={handleChange} />
      </label>

      <label>
        Start Date at this Practice:
        <input type="text" name="startdate" value={formData.startdate} onChange={handleChange} />
      </label>
      </div>


    <div className="row-form-group">
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <label>
        Middle Name:
        <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
</div>

<div  className="row-form-group">
<label>
        Social Security #:
        <input type="text" name="ssn" value={formData.ssn} onChange={handleChange} />
    
        Date of Birth:
        <input type="text" name="dob" value={formData.dob} onChange={handleChange} />
      </label>
</div>
<div  className="row-form-group">
<label>
        Dentist Home Address:
        <input type="text" name="homeaddress" value={formData.homeaddress} onChange={handleChange} />
      </label>
</div>
<div  className="row-form-group">
<label>
        Dentist Place of Birth:
        <input type="text" name="birthplace" value={formData.birthplace} onChange={handleChange} />
      </label>
</div>
<div  className="row-form-group">
  <label>
  Gender:
        <select name="gender" value={formData.gender} onChange={handleChange} >
          <option value="">--Select--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
  Age Limitations:
        <select name="ageLimitations" value={formData.ageLimitations} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
  If yes, specify:
        <input type="text" name="ageSpecification" value={formData.ageSpecification} onChange={handleChange} />
        </label>
  </div>
  <div  className="row-form-group">
<label>
        Ethnicity:
        <input type="text" name="ethnicity" value={formData.ethnicity} onChange={handleChange} />
        Languages Spoken by dentist:
        <input type="text" name="languages" value={formData.languages} onChange={handleChange} />
      </label>
</div>
<div  className="row-form-group">
  <label>
  CPR Certified:
        <select name="cprCertified" value={formData.cprCertified} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
  Hospital Privileges:
        <select name="hospitalPrivileges" value={formData.hospitalPrivileges} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
  If Yes, Where:
        <input type="text" name="hospital" value={formData.hospital} onChange={handleChange} />
        </label>
  </div>
  <div  className="row-form-group">
<label>
        Individual NPI #:
        <input type="text" name="npi1" value={formData.npi1} onChange={handleChange} />
        CAQH #:
        <input type="text" name="caqh" value={formData.caqh} onChange={handleChange} />
      </label>
</div>
<div  className="row-form-group">
  <label>
  Board Certified:
        <select name="boardCertified" value={formData.boardCertified} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
 If Yes, Date:
        <input type="text" name="boardDate" value={formData.boardDate} onChange={handleChange} />
  Board Eligible:
        <select name="boardEligible" value={formData.boardEligible} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
  ADA Member:
        <select name="adaMember" value={formData.adaMember} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
  </label>
</div>
<div  className="row-form-group">
<label>
        Specialty:
        <select name="specialty" value={formData.specialty} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="General">General</option>
          <option value="endodontist">Endodontist</option>
          <option value="periodontist">Periodontist</option>
          <option value="pedodontist">Pedodontist</option>
          <option value="oral surgeon">Oral Surgeon</option>
          <option value="orthodontist">Orthodontist</option>
          <option value="prosthodontist">Prosthodontist</option>
        </select>
  </label>
</div>
<div  className="row-form-group">
<label>
        (Oral Surgeon Only)Epi Pen Expiration Date:
        <input type="text" name="epiExi" value={formData.epiExi} onChange={handleChange} />
      </label>
</div>



<div className="row-form-group">
  <label>
  Education (General Dentistry Education):
        <input type="text" name="genEd" value={formData.genEd} onChange={handleChange} />
      </label>
  <label>
  Address:
        <input type="text" name="genAdd" value={formData.genAdd} onChange={handleChange} />
      </label>
  <label>
  Start Date MM/DD/YYYY:
        <input type="text" name="genStart" value={formData.genStart} onChange={handleChange} />
  Graduation Date MM/DD/YYYY:
        <input type="text" name="genEnd" value={formData.genEnd} onChange={handleChange} />
      </label>
</div>


<div className="row-form-group">
  <label>
  Education (Specialty School):
        <input type="text" name="specEd" value={formData.specEd} onChange={handleChange} />
      </label>
  <label>
  Address:
        <input type="text" name="specAdd" value={formData.specAdd} onChange={handleChange} />
      </label>
  <label>
  Start Date MM/DD/YYYY:
        <input type="text" name="specStart" value={formData.specStart} onChange={handleChange} />
  Graduation Date MM/DD/YYYY:
        <input type="text" name="specEnd" value={formData.specEnd} onChange={handleChange} />
      </label>
</div>



<div  className="row-form-group">
  <label>
  Residency Program (General Dentistry):
        <input type="text" name="genResEd" value={formData.genResEd} onChange={handleChange} />
      </label>
  <label>
  Address:
        <input type="text" name="genResAdd" value={formData.genResAdd} onChange={handleChange} />
      </label>
  <label>
  Start Date MM/DD/YYYY:
        <input type="text" name="genResStart" value={formData.genResStart} onChange={handleChange} />
  Completion Date MM/DD/YYYY:
        <input type="text" name="genResEnd" value={formData.genResEnd} onChange={handleChange} />
      </label>
</div>



<div  className="row-form-group">
  <label>
  Residency Program (Specialty):
        <input type="text" name="specResEd" value={formData.specResEd} onChange={handleChange} />
      </label>
  <label>
  Address:
        <input type="text" name="specResAdd" value={formData.specResAdd} onChange={handleChange} />
      </label>
  <label>
  Start Date MM/DD/YYYY:
        <input type="text" name="specResStart" value={formData.specResStart} onChange={handleChange} />
  Completion Date MM/DD/YYYY:
        <input type="text" name="specResEnd" value={formData.specResEnd} onChange={handleChange} />
      </label>
</div>



      <button type="submit" >Submit Application</button>
      </div>

      <footer className='App-footer'>
        Footer:
      </footer>

    </form>
  );
}

export default MyForm;
