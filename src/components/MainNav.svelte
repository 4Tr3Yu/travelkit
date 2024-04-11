<script>
    import {AppBar} from '@skeletonlabs/skeleton';
</script>
<AppBar>
    <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">Fck Gravity</strong>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://discord.gg/EXqV7W8MtY"
            target="_blank"
            rel="noreferrer"
        >
            Sing In
        </a>
        <a
            class="btn btn-sm variant-ghost-surface"
            href="/auth"
            rel="noreferrer"
        >
            Sing Up
        </a>
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://github.com/skeletonlabs/skeleton"
            target="_blank"
            rel="noreferrer"
        >
            Sing Out
        </a>
    </svelte:fragment>
</AppBar>