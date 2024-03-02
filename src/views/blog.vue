<template>
    <div class="blog">
        <div class="title">
            <h1>KKLAND blog</h1>
        </div>
        <div v-for="post in posts" :key="post.id" class="post">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                { id: 1, title: 'Mi primer post', content: 'Este es el contenido de mi primer post.' },
                { id: 2, title: 'Mi segundo post', content: 'Este es el contenido de mi segundo post.' },
                // Agrega más posts aquí
            ]
        }
    }
}
</script>

<style>
.blog {
    width: 100%;
    padding: 20px;
    background-color: #f5f5f5;
}

.title {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.post {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    text-align: center;
}

.post h2 {
    font-size: 24px;
    color: #333;
}

.post p {
    font-size: 18px;
    line-height: 1.6;
    color: #666;
}
</style>