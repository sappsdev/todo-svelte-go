<script lang="ts">
	import { onMount } from 'svelte';
	import { snackbar } from '$lib/store';
	import { todos, open_todo_form } from './todo_store'


	onMount(async () => {
		todos.get()
	});
</script>
<div class="overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr>
			<th>Name</th>
			<th>Source</th>
			<th>Time</th>
			<th>Files</th>
			<th>Status</th>
			<th>Actions</th>
        </tr>
      </thead>
      <tbody>
		  {#each $todos as row}			  
			<tr>
				<th>{row.name}</th>
				<td>{row.logo}</td>
				<td>{row.number}</td>
				<td>{row.status}</td>
				<td>{row.created_at}</td>
				<td>
					<div class="flex justify-start items-center gap-2">
					</div>
				</td>
			</tr>
		  {/each}
      </tbody>
    </table>
  </div>
{#if $todos.length === 0}
	<button 
		type="button" 
		on:click={() => open_todo_form.set(true)}
		class="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
	>
		<svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
		</svg>
		<span class="mt-2 block text-sm font-medium text-gray-900"> Create a new todo </span>
	</button>
{/if}
