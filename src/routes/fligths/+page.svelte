<script lang="ts">
	import {type Program} from '$lib/types';
	 const fligths = [
  {
      airline: 'Iberia',
      origin: 'BER',
      destiny: 'SCL',
      price: 
          {
              currency: 'EUR',
              amount: 1504
          }
      
  }  ,
  {
      airline: 'Qatar Airways',
      origin: 'OSA',
      destiny: 'BER',
      price: {
          currency: 'NZD',
          amount: 1691.51
      }
  } ,
  {
      airline: 'Latam',
      origin: 'BER',
      destiny: 'SCL',
      price: {
          currency: 'USD',
          amount: 1367.19
      }

  },
  
 
  {
      airline: 'Latam',
      origin: 'OSA',
      destiny: 'SCL',
      price: {
          currency: 'USD',
          amount: 1640.63
      }
  },
  {
    airline: 'Vietnam Airlines',
    origin: 'OSA',
    destiny: 'BER',
    price: {
        currency: 'USD',
        amount: 867.71
    }
  }
]
</script>

<div class="container h-full mx-auto">
	<h2 class="h2">Backdoor</h2>
	<h3 class="h3">Programs List</h3>
	<hr class="w-full my-4" />
	<div class="w-full text-token grid grid-cols-1 md:grid-cols-5 gap-4">
		{#each fligths as flight}
				<div class="card">
					<header class="card-header">
						<h4 class="h4">{flight.airline}</h4>
					</header>
					<section class="p-4">
						<p>{flight.price.amount}</p>
					</section>
					<footer class="card-footer">
						<button type="button" class="btn variant-ghost">
							<span></span>
							<span>{flight.origin}</span>
						</button>
                        <button type="button" class="btn variant-ghost">
							<span></span>
							<span>to</span>
						</button>
						<button type="button" class="btn variant-ghost">
							<span></span>
							<span>{flight.destiny}</span>
						</button>
					</footer>
				</div>
			{/each}
		
	</div>
</div>
