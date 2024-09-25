<script>
    import {AppBar} from '@skeletonlabs/skeleton';
</script>
<AppBar>
    <svelte:fragment slot="lead">
        <a href="/">
            <strong class="text-xl uppercase">Travelkit</strong>
        </a>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <a
            class="btn btn-sm variant-ghost-surface"
            href="/auth/login"
            rel="noreferrer"
        >
            Sing In
        </a>
        <a
            class="btn btn-sm variant-ghost-surface"
            href="/auth/register"
            rel="noreferrer"
        >
            Sing Up
        </a>
        <a
            class="btn btn-sm variant-ghost-surface"
            href="/auth"
            rel="noreferrer"
        >
            Sing Out
        </a>
    </svelte:fragment>
</AppBar>