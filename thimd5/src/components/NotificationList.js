import React, { useState, useEffect } from 'react';
const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/notification/3`);
                const data = await response.json();
                setNotifications(data.content);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []); // Thực hiện một lần sau khi component được render
    const displayNotifications = topicsSlice.map((topic) => (
        <div key={topic.id} className="col-md-3 custom-card">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/images/${topic.image}`} className="card-img-top" alt={topic.name} />
                <div className="card-body custom-card-body">
                    <h5 className="card-title">{topic.name}</h5>
                    <div className="faculty-badge">
                        {topic.faculty && (
                            <span className="badge badge-success">{topic.faculty.name}</span>
                        )}
                    </div>
                    <p className="card-text">{topic.introduce}...
                        <a href="#" className="btn btn-link">Xem thêm</a>
                    </p>
                </div>
            </div>
        </div>
    ));
}