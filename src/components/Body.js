import React from "react";

// Масив з даними учасників
const teamMembers = [
    {
        id: 1,
        name: "Мар'ян (Marian)",
        birthDate: "05.01.2007",
        initials: "Крукиницький М.В",
        photo: "/photo.jpg" // Шлях до фото в папці public
    },
    {
        id: 2,
        name: "Марія (Mariia)",
        birthDate: "14.10.2007",
        initials: "Данилюк М.П.",
        photo: "/mariia.jpg"
    },
    {
        id: 3,
        name: "Анна (Anna)",
        birthDate: "02.07.2007",
        initials: "Лук'яненко А.Є.",
        photo: "/anna.jpg"
    },
    {
        id: 4,
        name: "Остап (Ostap)",
        birthDate: "11.08.2007",
        initials: "Панків О.Т.",
        photo: "/76561198081347712.png"
    },
    {
        id: 5,
        name: "Юрій (Urii)",
        birthDate: "15.05.2007",
        initials: "Білик Ю.Т.",
        photo: "/urii.jpg"
    }
];

const Body = () => {
    return (
        <main style={styles.body}>
            {/* Проходимося по списку учасників і малюємо картку для кожного */}
            {teamMembers.map((member) => (
                <div key={member.id} style={styles.card}>
                    <img src={member.photo} alt={`Фото ${member.name}`} style={styles.photo} />
                    <h2 style={styles.name}>{member.name}</h2>
                    <p style={styles.details}>
                        <strong>Дата народження:</strong> {member.birthDate}
                    </p>
                    <p style={styles.details}>
                        <strong>Ініціали:</strong> {member.initials}
                    </p>
                </div>
            ))}
        </main>
    );
};

// Стилі перенесені з вашого HTML
const styles = {
    body: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "left",
        gap: "40px",
        padding: "50px",
    },
    card: {
        textAlign: "center",
        height: "375px",
        width: "275px",
        margin: "10px", // трохи змінив margin для кращого вигляду у флексі
        padding: "15px",
        border: "1px solid #adadad",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    photo: {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: "10px",
    },
    name: {
        fontSize: "1.2em",
        fontWeight: "bold",
        margin: "10px 0",
        color: "#333"
    },
    details: {
        fontSize: "medium",
        color: "#555",
        margin: "5px 0",
    },
};

export default Body;