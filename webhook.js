function wh_message(whapi_message, whapi_profile){
	if (whapi_message == undefined || whapi_message == ''){return{Error:'Message not found'}}
	if (whapi_profile == undefined || whapi_profile == ''){return{Error:'Profile not found'}}
	if (whapi_profile.link == undefined || whapi_profile.link == ''){return{Error:'Webhook link not found'}}
	
	var msg = {'content':whapi_message}
	if (whapi_profile.name !== undefined && whapi_profile.name !== ''){var whapi_msg = {'content':whapi_message,'username':whapi_profile.name}}
	if (whapi_profile.pfp !== undefined && whapi_profile.pfp !== ''){var whapi_msg = {'content':whapi_message,'avatar_url':whapi_profile.pfp}}
	if (whapi_profile.name !== undefined && whapi_profile.name !== '' && whapi_profile.pfp !== undefined && whapi_profile.pfp !== ''){var whapi_msg = {'content':whapi_message,'username':whapi_profile.name,'avatar_url':whapi_profile.pfp}}
	
	fetch(whapi_profile.link+"?wait=true", {"method":"POST", "headers":{"content-type":"application/json"}, "body":JSON.stringify(whapi_msg)})
}
