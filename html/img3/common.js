function setHome(obj) {
	try {
		obj.style.behavior = "url(#default#homepage)";
		obj.setHomePage("http://www.zhaost.com");
	} catch(e) {
		alert("�˲�����������ܾ��������������ַ�����롰about:config��");
	}
}

function AddFavorite() {
	try {
		window.external.addFavorite(location.href, document.title);
	} catch (e) {
		try {
			window.sidebar.addPanel(document.title, location.href, '');
		} catch (e) {
			alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
		}
	}
}

function AddWebgameFavorite() {
	try {
		var params = window.location.href.replace(/http\:\/\//g, '').split("/");
		url = 'http://' + params[0] + '/' + params[1] + '/' + params[2] + '/';
		window.external.addFavorite(url, document.title);
	} catch (e) {
		try {
			window.sidebar.addPanel(document.title, url, '');
		} catch (e) {
			alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
		}
	}
}
