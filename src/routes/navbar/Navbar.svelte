<script lang="ts">
    import filestuff from './features/filestuff';
    import editing from './features/terminal';
    import localhost from './features/localhost';
    import chatgpt from './features/chatgpt';
</script>
<head>
<script src="https://kit.fontawesome.com/6da05088cf.js" crossorigin="anonymous"></script>
<script src="/socket.io/socket.io.js"></script>
</head>

<nav class="navbar flex flex-row justify-left items-left bg-dark w-full h-[90px]">
    <ul class="list-none">
        <li class="text-5xl pl-8 pt-4 inline-block"><i class="fa-regular fa-file"></i></li>
        <li class="text-5xl pl-8 pt-4 inline-block"><i class="fa-solid fa-earth-europe"></i></li>
        <li class="text-5xl pl-8 pt-4 inline-block"><i class="fa-solid fa-terminal"></i></li>
        <li class="text-5xl pl-8 pt-4 inline-block"><i class="fa-regular fa-comments"></i></li>
    </ul>
</nav>

<style lang="postcss">
    :where(li) {
        cursor: pointer;
    }
</style>
