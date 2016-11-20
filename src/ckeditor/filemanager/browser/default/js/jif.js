/*
	=============================================================================
	jQuery плагин для стилизации файл инпутов
	=============================================================================
	Автор: 			Олег Савватеев
	Версия:			1.0.0
	Описание:		http://savvateev.org/blog/38
	Демо:			http://savvateev.org/demo/jInputFile/index.html		
	Лицензия:		MIT
	
	==============================================================================
	Плагин сделан на основе замечательной статьи:
	http://vremenno.net/design/file-inputs-styling/
*/



(function($) {
	$.fn.jInputFile = function(options) {
		
		return this.each(function() {
		
			$(this).val('');
			$(this).wrap('<div></div>');
			$(this).parent().css('height', $(this).height());
			$(this).after('<div class="jInputFile-fakeButton"></div><div class="jInputFile-blocker"></div><div class="jInputFile-activeBrowseButton jInputFile-fakeButton"></div><div class="jInputFile-fileName"></div>');
			$(this).addClass('jInputFile-customFile');
		
			$(this).hover(
				function () {
					$(this).parent().children('.jInputFile-activeBrowseButton').css('display', 'block');
				},
				function () {
					$(this).parent().children('.jInputFile-activeBrowseButton').css('display', 'none');
				}
			);
		
			$(this).change(function(){
				var file = $(this).val();
           
				//Находим название файла и его расширение
				var reWin = /.*\\(.*)/;
				var fileName = file.replace(reWin, '$1');
				var reUnix = /.*\/(.*)/;
				fileName = fileName.replace(reUnix, '$1');
				var regExExt =/.*\.(.*)/;
				var ext = fileName.replace(regExExt, '$1');
			
				//Показываем значок и имя файла
				var pos;
				if (ext){
					switch (ext.toLowerCase()) {
						case 'txt': case 'text': pos = '16'; break;
						case 'doc': case 'docx': pos = '32'; break;
						case 'xls': case 'xlsx': pos = '48'; break;
						case 'ppt': case 'pptx': pos = '64'; break;
						case 'pdf': pos = '80'; break;
						case 'odt': case 'ods': case 'odp': case 'odg': case 'odc': case 'odb': pos = '96'; break;
						case 'bmp': pos = '112'; break;                       
						case 'jpg': case 'jpeg': pos = '128'; break;
						case 'png': pos = '144'; break;
						case 'gif': pos = '160'; break;
						case 'psd': pos = '176'; break;
						case 'mp3': case 'wav': case 'ogg': pos = '192'; break;
						case 'avi': case 'wmv': case 'flv': case 'mp4': pos = '208'; break;
						case 'exe': case 'exe': case 'sys': pos = '224'; break;
						case 'htm': case 'html': case 'xml': pos = '240'; break;
						case 'zip': case 'tgz': case 'gz': case 'tar': pos = '256'; break;
						case '7z': pos = '272'; break;
						case 'rar': pos = '288'; break;
						default: pos = '0'; break
					};
					$(this).parent().children('.jInputFile-fileName').html(fileName).css({'background-position':('0px -'+pos+'px'),'background-repeat':'no-repeat', 'display':'block'});
				};	
			});	
		});
	}
})(jQuery);