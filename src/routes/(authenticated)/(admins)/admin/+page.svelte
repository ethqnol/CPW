<!--
 Created on Fri Oct 13 2023

 Copyright (c) 2023 Thomas Zhou
-->

<script lang="ts">
    import { goto } from "$app/navigation";
    import { user } from "@/client/stores/user";
    import { onMount } from "svelte";

    async function gotoDataUpload() {
        await goto('/admin/data-upload');
    }

    async function gotoMentorSearch() {
      await goto('/admin/mentor-search')
    }

    async function gotoProjectCatalog() {
      await goto('/admin/project-catalog')
    }

    async function gotoYearStatus() {
      await goto('/admin/year-status')
    }

    export let data;

    $: ({ projectCountPublished, projectCountNotPublished } = data)

    $: countPub = projectCountPublished//0;
    $: countNotPub = projectCountNotPublished//0;


    // onMount(() => {
    //     let speed = 85;

    //     const animatePub = () => {
    //         const value = projectCountPublished;
            
    //         const time = value / speed;
    //         if(countPub < value) {
    //             countPub = Math.ceil(countPub + time);
    //             setTimeout(animatePub, speed);
    //             speed = speed*0.99
    //         }else{
    //             countPub = value;
    //         }
            
    //     }

    //     const animateUnPub = () => {
    //         const value = projectCountNotPublished;
    //         const data = countNotPub;
            
    //         const time = value / speed;
    //         if(countNotPub < value) {
    //             countNotPub = Math.ceil(countNotPub + time);
    //             setTimeout(animateUnPub, speed);
    //             speed = speed*0.99
    //         }else{
    //             countNotPub = value;
    //         }
    //     }
   
    //     animatePub();
    //     animateUnPub();
    // });


</script>

<main>
    <div class="main-container">
        <div class="dashboard-panel-head">
            <h1 class="title"><strong>Administrator Dashboard</strong></h1>
        </div>
        
        <div class="dashboard-panel">
            <div class="count-panel">
                <h3 class="count-title">Logging Published Projects</h3>
                <div class="count-value">{countPub}</div>
            </div>
            <hr>
            <div class="count-panel">
                <h3 class="count-title">Logging Unfinished Projects</h3>
                <div class="count-value">{countNotPub}</div>
            </div>
        </div>

        <div class="dashboard-panel-button">
          <button on:click={gotoDataUpload} class="dashboard-button">Data Upload</button>
          <button on:click={gotoMentorSearch} class="dashboard-button">Mentor Searcher</button>
          <button on:click={gotoProjectCatalog} class="dashboard-button">Project Catalog</button>
          <button on:click={gotoYearStatus} class="dashboard-button">Year Status</button>
        </div>
    </div>
</main>
  
<style>
 main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh - var(--nav-bar-height);
    margin-bottom: 1rem;
  }

  .dashboard-panel-head {
    background-color: #858585; 
    border: 1px solid #1E1E1E; 
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
  }
  .dashboard-panel {
    background-color: #858585; 
    display: flex;
    gap: 2rem;
    border: 1px solid #1E1E1E; 
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
  }

  .dashboard-panel-button {
    background-color: #858585; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #1E1E1E; 
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
  }

  .title {
    font-size: 2rem;
    color: #ffffff;
    text-align: center;
    margin-bottom: 10px;
  }


  .count-panel {
    text-align: center;
  }

  .count-title {
    font-size: 1.5rem;
    color: var(--color-blue-grey-100);
    margin-bottom: 10px;
  }

  .count-value {
    font-size: 2.8rem;
    color: var(--color-red-400); 
  }

  .dashboard-button {
    background-color: #0073E6; 
    color: #fff;
    padding: 10px 20px;
    font-size: 1.2rem;
    border: none;
    width: 20vw;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    transition: background-color 0.3s;
  }

  .dashboard-button:hover {
    background-color: #005CBF; 
  }
  .main-container{
    background-color: var(--color-blue-grey-100); 
    border: 1px solid #1E1E1E; 
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    margin-top: var(--nav-bar-height);
  }

</style>

