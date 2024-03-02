<template>
    <div class="home">
        <div class="icon-container">
            <img class="icon" src="https://kkweb.fra1.cdn.digitaloceanspaces.com/logito_nuevo.jpg" alt="Icon" />
        </div>
        <button class="join-button" @click="redirectToDiscord">Únete al servidor de Discord</button>
    </div>
</template>

<script>
export default {
    methods: {
        redirectToDiscord() {
            window.location.href = "https://discord.com/invite/A9TdAdzT3e";
        }
    }
}
</script>

<style>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.icon-container {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.join-button {
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #ff0000;
    color: #ffffff;
    font-weight: bold;
    border: none;
    cursor: pointer;
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>