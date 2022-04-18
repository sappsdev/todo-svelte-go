<script>
import TodoList from "$lib/components/todo/todo_list.svelte";

</script>
<div class="max-w-7xl mx-auto w-full px-4">
    <div class="flex justify-between py-4 items-center w-full">
        <div class="text-xl font-semibold">
            TODOS
        </div>

        <button class="btn">
            New
        </button>
    </div>
    <TodoList />
</div>