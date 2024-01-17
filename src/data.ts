export interface IData {
	id: number;
	title: string;
	date: {
		start: number;
		end: number;
	};
	slides: {
		year: number;
		description: string;
	}[];
}

const data: IData[] = [
	{
		id: 1,
		title: 'Наука',
		date: {
			start: 2015,
			end: 2022,
		},
		slides: [
			{
				year: 2015,
				description:
					'Физики анонсировали исследование, в котором впервые были обнаружены гравитационные волны, что подтверждало общую теорию относительности, предложенную Альбертом Эйнштейном',
			},
			{
				year: 2016,
				description:
					'Астрономы обнаружили экзопланету, которая имеет схожие условия для развития жизни, включая атмосферу и жидкую воду.',
			},
			{
				year: 2017,
				description:
					'Исследователи создали квантовые компьютеры, способные обрабатывать информацию при помощи квантовых явлений, что позволяет выполнить сложнейшие вычисления, недоступные для классических компьютеров.',
			},
			{
				year: 2019,
				description:
					'Исследователи создали квантовые компьютеры, способные обрабатывать информацию при помощи квантовых явлений, что позволяет выполнить сложнейшие вычисления, недоступные для классических компьютеров.',
			},
			{
				year: 2021,
				description:
					'Астрономы использовали новые наблюдательные данные, чтобы подтвердить существование тёмной материи – таинственного вещества, которое составляет большую часть вселенной, но не взаимодействует с электромагнитным излучением.',
			},
			{
				year: 2022,
				description:
					'Астрономы провели эксперимент, который позволил впервые измерить радиус горизонта событий вокруг черной дыры, подтвердив своими расчётами общую теорию относительности Эйнштейна и доказав существование такого гравитационного объекта.',
			},
		],
	},
	{
		id: 2,
		title: 'Литература',
		date: {
			start: 2003,
			end: 2012,
		},
		slides: [
			{
				year: 2003,
				description: 'Нобелевская премия по литературе была вручена южноафриканскому писателю Джону Максвеллу Кутзее.',
			},
			{
				year: 2005,
				description: 'Голубое зонтик" Лю Ися занял первое место в престижном рейтинге лучших книг года в Китае.',
			},
			{
				year: 2008,
				description:
					'Роман "252 дня войны" Жоэль Дикер стал бестселлером в Европе и затем получил международное признание.',
			},
			{
				year: 2010,
				description:
					'Кладбище домашних животных" Стивена Кинга было переведено в кино и получило большое количество позитивных отзывов.',
			},
			{
				year: 2011,
				description:
					'Писательница Джорджио Фалконе получила Нобелевскую премию по литературе за свой вклад в развитие современной прозы.',
			},
			{
				year: 2012,
				description:
					'Жаклин Уилсон, автор бестселлера "Треск крошки", стала самой популярной писательницей в Великобритании.',
			},
		],
	},
	{
		id: 3,
		title: 'Кино',
		date: {
			start: 1990,
			end: 2010,
		},
		slides: [
			{
				year: 1990,
				description:
					'Выход фильма "Крёстный отец. Часть III" Фрэнсиса Форда Копполы, завершающего трилогию о семье мафиози Корлеоне.',
			},
			{
				year: 1997,
				description:
					'Выход фильма "Титаник" Джеймса Кэмерона, ставшего культовым и самым кассовым фильмом своего времени, рассказывающего историю затонувшего лайнера и невероятной любви главных героев.',
			},
			{
				year: 1999,
				description:
					'Выход второй части трилогии "Матрица" братьев Вачовски, которая привнесла в кино новые эстетические и философские идеи.',
			},
			{
				year: 2001,
				description:
					'Премьера первой части трилогии "Властелин колец" Питера Джексона, основанной на произведении Дж.Р.Р. Толкина, которая стала одной из самых популярных франшиз в истории.',
			},
			{
				year: 2008,
				description:
					'Выход фильма "Темный рыцарь" Кристофера Нолана, в котором за роль Жокера Хита Леджера был удостоен премии посмертно, и фильм получил признание как один из лучших супергеройских фильмов.',
			},
			{
				year: 2010,
				description:
					'Режиссёр Дэвид Финчер выпускает фильм "Социальная сеть", рассказывающий о создании Facebook, который номинировался на оскар в восьми категориях и стал важным знаком времени.',
			},
		],
	},
	{
		id: 4,
		title: 'Живопись',
		date: {
			start: 2008,
			end: 2015,
		},
		slides: [
			{
				year: 2008,
				description:
					'В 2008 году картина Леонардо да Винчи "Мадонна Бенинских" была продана на аукционе за рекордные 450,3 миллиона долларов, что является самой высокой ценой, заплаченной за работу искусства.',
			},
			{
				year: 2010,
				description:
					'Произведение поп-художника Энди Уорхола "8 электрических стульев" было продано на аукционе за 62,1 миллиона долларов, также установив рекорд.',
			},
			{
				year: 2011,
				description:
					'На мировой аукционной сцене появилась работа голландского художника Винсента Ван Гога "Пейзаж с голубым месяцем", что составило сенсацию, так как ранее никакие пейзажи Ван Гога не были проданы.',
			},
			{
				year: 2014,
				description:
					'Американский художник Марк Ротко был признан самым дорогим живописцем, когда его картина "No. 6 (Violet, Green, and Red)" была продана на аукционе за 186 миллионов долларов.',
			},
			{
				year: 2015,
				description:
					'Картина Поль Гогена "Картинка отца Тиопуло" была украдена из музея искусства в Осло. Это вызвало широкий резонанс и стало одним из самых громких происшествий в истории кражи картин.',
			},
		],
	},
	{
		id: 5,
		title: 'Музыка',
		date: {
			start: 2010,
			end: 2020,
		},
		slides: [
			{ year: 2010, description: 'Альбом "Recovery" Эминема становится самым продаваемым альбомом года в США' },
			{ year: 2011, description: 'Появление песни "Rolling in the Deep" Адель' },
			{
				year: 2012,
				description:
					'Олимпийские игры в Лондоне, во время которых прошел концерт закрывающей церемонии с участием Бейонсе, Пола Маккартни и других известных исполнителей',
			},
			{ year: 2014, description: 'Тейлор Свифт выпускает популярный альбом "1989"' },
			{ year: 2016, description: 'Появление песни "Formation" Бейонсе' },
			{
				year: 2018,
				description: 'Награждение "Альбом года" на премии Грэмми получает Бруно Марс за альбом "24K Magic"',
			},
			{ year: 2010, description: 'Выход альбома "Folklore" Тейлор Свифт' },
		],
	},
	{
		id: 6,
		title: 'Архитектура',
		date: {
			start: 2018,
			end: 2023,
		},
		slides: [
			{
				year: 2018,
				description:
					'Открытие Лувра Абу-Даби. Этот музей стал одной из главных достопримечательностей ОАЭ и был разработан совместно архитекторами из Франции и ОАЭ.',
			},
			{
				year: 2019,
				description:
					'Был открыт новый музей в Дохе, Катар. Здание, разработанное архитектором Жаном Нувелем, представляет собой архитектурный шедевр и стало символом современного искусства в Катаре.',
			},
			{
				year: 2019,
				description:
					'Был открыт филиал Парижского Центра Помпиду в Шанхае, Китай. Здание, разработанное в сотрудничестве французских и китайских архитекторов, стало новой иконой города.',
			},
			{
				year: 2020,
				description:
					'Завершено строительство нового Центра Бакарди в Мексике, разработанного знаменитым архитектором Франком Гери',
			},

			{
				year: 2021,
				description:
					'Открытие Гринплазы в Китае. Этот комплекс включает в себя несколько небоскребов, общественные пространства и парки, став символом современного развития китайской городской архитектуры.',
			},
			{ year: 2023, description: 'Открытие Национального музея современного искусства и архитектуры в Афинах, Греция' },
		],
	},
];

export default data;