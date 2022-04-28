public without sharing class PokemonAPICallout {
    
    @AuraEnabled
	public static Map<String, List<String>> QueryPokemon(String pokemonName) {
        
        pokemonName = pokemonName.toLowerCase();
        
        HTTP http = new HTTP();
        
        HttpRequest hRequest = new HttpRequest();
        hRequest.setEndpoint('https://pokeapi.co/api/v2/pokemon/' + pokemonName);

        hRequest.setMethod('GET');
        
        HttpResponse response = http.send(hRequest);
        
        Map<String, List<String>> returnMap = new Map<String, List<String>>();
        if (response.getStatusCode() != 200) return returnMap;
        
        JSONParser parser = JSON.createParser(response.getBody());
        
        List<String> abilityList = new List<String>();
        List<String> typeList = new List<String>();
        List<String> images = new List<String>();
        List<String> name = new List<String>();
        
        while (parser.NextToken() != null) {
        	if (parser.getCurrentToken() == JSONToken.FIELD_NAME) {
				switch on parser.getText() {
                    when 'ability' {

                        parser.NextValue();
                        parser.NextValue();
                        abilityList.add(parser.getText());
                    }
                    when 'type' {
                        parser.NextValue();
                        parser.NextValue();
                        typeList.add(parser.getText());
                    }
                    when 'official-artwork' {
                        parser.nextValue();
                        parser.nextValue();
                        images.add(parser.getText());
                    }
                    when 'species' {
                        parser.NextValue();
                        parser.NextValue();
                        name.add(parser.getText());
                    }
                }
            }
        }
        
        returnMap.put('type', typeList);
        returnMap.put('ability', abilityList);
        returnMap.put('image', images);
        returnmap.put('name', name);
        
        return returnMap;
    }
}