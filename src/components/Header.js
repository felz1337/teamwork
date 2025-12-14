import React from "react";

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.h1}>My Dream Team</h1>
            <h2 style={styles.h2}>Список учасників</h2>
        </header>
    );
};

const styles = {
    header: {
        textAlign: "center",
        padding: "30px",
        background: "#f4f4f4",
        borderBottom: "1px solid #ddd"
    },
    h1: {
        margin: 0,
        color: "#333",
    },
    h2: {
        margin: "10px 0 0 0",
        color: "#555",
        fontSize: "1.5em"
    }
};

export default Header;