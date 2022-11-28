<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';
  // import { Button } from "$lib"

	const argTypes = {
		backgroundColor: { control: 'color' },
		label: { control: 'text' },
		onClick: { action: 'onClick' },
		primary: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}

  const onClick = () => {
    console.log("clicked")
  }
</script>

<Meta title="Example/Button" component={Button} {argTypes} />

<Template let:args>
  <Button {...args} on:click={onClick} />
</Template>

<Story name="Primary" args={{ label: "Button", primary: true }}/>
<Story name="Tailwind" args={{ label: "Button using tailwind bg-red-400", tailwind: true }}/>
<Story name="Secondary" args={{ label: "Button" }} source />
<Story name="Large" args={{ label: "Button", size: "large" }} />
<Story name="Small" args={{ label: "Button", size: "small" }} />
