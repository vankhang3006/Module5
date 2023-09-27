import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

export default function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };

  const [form, setForm] = useState({});

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleValidate() {
    const errors = {};
    if (!form.name) {
      errors.name = "Required";
    }
    if (!form.cmnd) {
      errors.cmnd = "Required";
    }
    if (!form.birthday) {
      errors.birthday = "Required";
    }else if (form.birthday <= 1900) {
      errors.birthday = "Invalid year of birth";
      console.log("code");
    }
    if (!form.nationality) {
      errors.nationality = "Required";
    }
    if (!form.tinh) {
      errors.tinh = "Required";
    }
    if (!form.quan) {
      errors.quan = "Required";
    }
    if (!form.phuong) {
      errors.phuong = "Required";
    }
    if (!form.num) {
      errors.num = "Required";
    }
    if (!form.phone) {
      errors.phone = "Required";
    }
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
      console.log("code");
    }
    return errors;
  }

  function handleSubmit() {
    alert("Add medical successfully!!!");
  }

  return (
      <div>
        <h1>Tờ khai y tế</h1>
        <Formik
            initialValues={form}
            validate={handleValidate}
            onSubmit={handleSubmit}
        >
          {({ errors, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div
                    className={`medical-input ${
                        errors.name ? "medical-input-error" : ""
                    }`}
                >
                  <label>Họ tên</label>
                  <input
                      type="text"
                      name="name"
                      value={form.name || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.name}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.cmnd ? "medical-input-error" : ""
                    }`}
                >
                  <label>Số hộ chiếu/CMND</label>
                  <input
                      type="text"
                      name="cmnd"
                      value={form.cmnd || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.cmnd}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.birthday ? "medical-input-error" : ""
                    }`}
                >
                  <label>Năm sinh</label>
                  <input
                      type="text"
                      name="birthday"
                      value={form.birthday || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.birthday}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.gender ? "medical-input-error" : ""
                    }`}
                >
                  Giới tính
                  <input
                      type="radio"
                      name="gender"
                      value={form.gender || ""}
                      onChange={handleChange}
                  />Nam
                  <input
                      type="radio"
                      name="gender"
                      value={form.gender || ""}
                      onChange={handleChange}
                  />Nữ
                  <p className="error">{errors.gender}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.nationality ? "medical-input-error" : ""
                    }`}
                >
                  <label>Quốc tịch</label>
                  <input
                      type="text"
                      name="nationality"
                      value={form.nationality || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.nationality}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.company ? "medical-input-error" : ""
                    }`}
                >
                  <label>Công ty làm việc</label>
                  <input
                      type="text"
                      name="company"
                      value={form.company || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.company}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.part ? "medical-input-error" : ""
                    }`}
                >
                  <label>Bộ phận làm việc</label>
                  <input
                      type="text"
                      name="part"
                      value={form.part || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.part}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.card ? "medical-input-error" : ""
                    }`}
                >
                  Có thẻ bảo hiểm y tế
                  <input
                      type="checkbox"
                      name="card"
                      value={form.card || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.card}</p>
                </div>
                <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                <div
                    className={`medical-input ${
                        errors.tinh ? "medical-input-error" : ""
                    }`}
                >
                  <label>Tỉnh thành</label>
                  <input
                      type="text"
                      name="tinh"
                      value={form.tinh || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.tinh}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.quan ? "medical-input-error" : ""
                    }`}
                >
                  <label>Quận /huyện</label>
                  <input
                      type="text"
                      name="quan"
                      value={form.quan || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.quan}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.phuong ? "medical-input-error" : ""
                    }`}
                >
                  <label>Phường /xã</label>
                  <input
                      type="text"
                      name="phuong"
                      value={form.phuong || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.phuong}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.num ? "medical-input-error" : ""
                    }`}
                >
                  <label>Số nhà, phố, tổ dân phố /thôn /đội</label>
                  <input
                      type="text"
                      name="num"
                      value={form.num || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.num}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.phone ? "medical-input-error" : ""
                    }`}
                >
                  <label>Điện thoại</label>
                  <input
                      type="text"
                      name="phone"
                      value={form.phone || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.phone}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.email ? "medical-input-error" : ""
                    }`}
                >
                  <label>Email</label>
                  <input
                      type="text"
                      name="email"
                      value={form.email || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.email}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.country ? "medical-input-error" : ""
                    }`}
                >
                  <h2>Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia /vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</h2>
                  <textarea
                      type="text"
                      name="country"
                      value={form.country || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.country}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.sig ? "medical-input-error" : ""
                    }`}
                >
                  <h2>Trong vòng 14 ngày qua, Anh /Chị có thấy xuất hiện dấu hiệu nào sau đây không ?</h2>
                  <input
                      type="checkbox"
                      name="sig"
                      value={form.sig || ""}
                      onChange={handleChange}
                  />Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                  <p></p>
                  <input
                      type="checkbox"
                      name="sig"
                      value={form.sig || ""}
                      onChange={handleChange}
                  />Người từ nước có bệnh COVID-19
                  <p></p>

                  <input
                      type="checkbox"
                      name="sig"
                      value={form.sig || ""}
                      onChange={handleChange}
                  />Người có biểu hiện (Số, ho, khó thở, viêm phổi)
                  <p className="error">{errors.sig}</p>
                </div>
                <div
                    className={`medical-input ${
                        errors.person ? "medical-input-error" : ""
                    }`}
                >
                  <h2>Trong vòng 14 ngày qua, Anh /Chị có tiếp xúc với ?</h2>
                  <input
                      type="checkbox"
                      name="person"
                      value={form.person || ""}
                      onChange={handleChange}
                  />Sốt
                  <p></p>

                  <input
                      type="checkbox"
                      name="person"
                      value={form.person || ""}
                      onChange={handleChange}
                  />Ho
                  <p></p>

                  <input
                      type="checkbox"
                      name="person"
                      value={form.person || ""}
                      onChange={handleChange}
                  />Khó thở
                  <p></p>

                  <input
                      type="checkbox"
                      name="person"
                      value={form.person || ""}
                      onChange={handleChange}
                  />Viêm họng
                  <p></p>

                  <input
                      type="checkbox"
                      name="person"
                      value={form.person || ""}
                      onChange={handleChange}
                  />Mệt mỏi
                  <p className="error">{errors.person}</p>
                </div>
                <button type="submit">Submit</button>
              </form>
          )}
        </Formik>
      </div>
  );
}