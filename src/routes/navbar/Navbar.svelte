<script lang="ts">
    import filestuff from './features/filestuff';
    import editing from './features/terminal';
    import localhost from './features/localhost';
</script>
<head>
<script src="https://kit.fontawesome.com/6da05088cf.js" crossorigin="anonymous"></script>

</head>

<nav class="navbar flex justify-between items-center bg-dark w-full h-[70px]">
    <ul class="list-none">
        <li class="text-2xl pl-8 pb-2 inline-block" title="New File"><i class="fa-solid fa-plus"></i></li>
        <li class="text-2xl pl-8 pb-2 inline-block" title="Folder"><i class="fa-solid fa-folder"></i></li>
        <li class="text-2xl pl-8 pb-2 inline-block" title="Localhost"><i class="fa-solid fa-earth-europe"></i></li>
        <li class="text-2xl pl-8 pb-2 inline-block" title="Terminal"><i class="fa-solid fa-terminal"></i></li>
        <li class="text-2xl pl-8 pb-2 inline-block" title="ChatGPT"><a href="https://chatgpt.com/#you-are-here-because-ur-stupid-idiot"><i class="fa-regular fa-comments"></i></a></li>
        <li class="text-2xl pl-8 pb-2 inline-block" title="Help"><a href="https://github.com/nikolas-source/thanks/blob/main/README.md"><i class="fa-regular fa-question"></i></a></li>
    </ul>
    <ul class="list-none justify-end">
        <li class="text-[28px] pr-8 pb-1 inline-block" title="Visit my github page nerd"><a href="https://github.com/nikolas-source"><i class="fa-brands fa-github"></i></a></li>  
    </ul>
</nav>

<style lang="postcss">
    :where(li) {
        color: rgb(163, 163, 163);
        cursor: pointer;
    }
</style>
