<script lang="ts">
    import filesystem from './filesystem';
    import { onMount } from 'svelte';

    let resizable: HTMLDivElement | null = null;
    let handle: HTMLDivElement | null = null;
    let isResizing = false;

    onMount(() => {
        resizable = document.getElementById('resizable') as HTMLDivElement;
        handle = document.getElementById('handle') as HTMLDivElement;

        handle.addEventListener('mousedown', (e: MouseEvent) => {
            e.preventDefault();
            isResizing = true;

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });

    const onMouseMove = (e: MouseEvent) => {
        if (!isResizing || !resizable) return;

        // Calculate the new width
        const newWidth = e.clientX - resizable.getBoundingClientRect().left;
        if (newWidth > 100) { // Set a minimum width to prevent it from becoming too small
            resizable.style.width = `${newWidth}px`;
        }
    };

    const onMouseUp = () => {
        isResizing = false;

        // Remove the event listeners when resizing ends
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };
</script>

<nav class="h-screen left-0 w-64 bg-gray-800 p-4 relative" id="resizable">
    <div class="w-[10px] h-screen bg-gray-800 absolute right-0 top-0 cursor-ew-resize" id="handle"></div>
</nav>

<style class="postcss"></style>