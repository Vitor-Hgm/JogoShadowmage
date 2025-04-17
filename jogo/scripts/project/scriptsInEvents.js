

const scriptsInEvents = {

	async Folhafase1_Event17_Act3(runtime, localVars)
	{
		 
		let vidas = runtime.globalVars.vidas
		
		vidas--;
		
		runtime.globalVars.vidas = vidas
		
		if(vidas <= 0){
			console.log("GameOver");
			runtime.goToLayout("GameOver");
			
		}
	},

	async Folhafase2_Event20_Act2(runtime, localVars)
	{
		 let vidaas = runtime.globalVars.vidaas
		
		vidaas--;
		
		runtime.globalVars.vidaas = vidaas
		
		if(vidaas <= 0){
			console.log("GameOver2");
			runtime.goToLayout("GameOver2");
			
		}
	},

	async Folhafase2_Event26_Act2(runtime, localVars)
	{
		 let vidaas = runtime.globalVars.vidaas
		
		vidaas--;
		
		runtime.globalVars.vidaas = vidaas
		
		if(vidaas <= 0){
			console.log("GameOver2");
			runtime.goToLayout("GameOver2");
			
		}
	},

	async Folhafase2_Event34_Act3(runtime, localVars)
	{
		 let vidaas = runtime.globalVars.vidaas
		
		vidaas--;
		
		runtime.globalVars.vidaas = vidaas
		
		if(vidaas <= 0){
			console.log("GameOver2");
			runtime.goToLayout("GameOver2");
			
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
