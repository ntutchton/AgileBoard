import * as BucketActionTypes from '../actiontypes/bucket';

const initialState = {
	bucketList : [
	{
		title: "BRAINSTORM",
		tasks: [
			{
				name: "R'lyeh",
				desc: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Gnaiih y'hah hai mg llll fhtagn kn'aagl Azathoth n'gha, nafm'latgh ebunma vulgtlagln f'k'yarnak Chaugnar Faugn hrii fhtagn shugg Shub-Niggurath ee syha'h Shub-Niggurath hlirgh. Llll zhro ph'ch' 'ai nilgh'ri ftaghu y'hah n'gha shoggagl, goka r'luh zhro naflr'luh r'luh 'ai throd, orr'e nw syha'h y-Yoggoth h'mnahn' ron 'ai. Y-llll kn'a Cthulhu 'bthnk Nyarlathotepog stell'bsna cvulgtlagln ron mnahn', gnaiih hai geb nilgh'ri nafllw'nafh y-ehye vulgtlagln kadishtu f'fm'latgh, nog Yoggoth mnahn' Dagon Yoggoth y'hah hlirgh. H'shugg naron ya sgn'wahl hupadghog y-Hastur ch' sgn'wahl wgah'nor, h'orr'e shtunggli Yoggoth ebunma shtungglior ooboshuagl lw'nafh nilgh'ri, naflr'luh f'ah athg uaaah mg gnaiihyar s'uhn. "
			},
			{
				name: "Lovecraft",
				desc: "Y'hah ah nilgh'ri zhro y-hlirgh y'hah ilyaa llll, h'uh'e shtunggli hafh'drn shagg hupadgh naflebunma sgn'wahl mg, Shub-Niggurath ron bug ya ngnog ebunma. Zhro hafh'drn gotha ngstell'bsna y-R'lyeh uaaah fm'latgh hrii li'hee ee nilgh'ri ngluiyar, f'R'lyeh n'ghftoth ftaghu R'lyeh naflli'hee y-ehye nglui ebunma nglui nnnllll, ron k'yarnak llllog sll'ha bug Shub-Niggurath geb y'hah zhro nanglui. Y-llll kadishtu syha'h ep n'ghft kadishtu naflDagon hafh'drnoth cnilgh'ri Shub-Niggurath Dagonyar nilgh'ri fhtagn ep, gnaiih naflah fm'latgh Nyarlathotepagl ebunma ep ngy'hah zhro hai ep y-fm'latgh hafh'drn. Sgn'wahl hlirgh Dagon nggotha navulgtlagln kn'a nglui ebunma f'lw'nafh llll y-nilgh'ri hrii shogg ep ah, Yoggoth geb y'hah nanw nachtenff f'hafh'drn ilyaa ep 'ai vulgtm ee r'luh ooboshu. "
			},
		],
	},
	{
		title:	"PLAN",
		tasks: [
			{
				name: "TASK X",
				desc: "a special task"
			},
			{
				name: "MASTER TASK",
				desc: "an important task"
			},
			{
				name: "N'yarlathotep",
				desc: "ai chtenff Nyarlathotep Yoggothnyth kn'aor nilgh'ri ftaghu ngkn'a Dagon hrii ch'yar, ftaghu Nyarlathotep c'bthnk ooboshu y-ilyaa f'ya 'aiyar fm'latgh sll'ha ch', Azathoth f'ebunma ooboshu k'yarnak gof'nn R'lyeh ch' ph'nw R'lyeh. Y-athg n'ghft lloig h''fhalma phlegeth wgah'n shtunggli li'hee n'ghft gotha, ya lw'nafh nw athgoth ph'nglui f'uln nnnilyaa vulgtlagln shagg, phlegeth ebunma ch' geb llll nw ph'throd Dagon. Geb shagg Azathoth orr'e nnnsgn'wahl geb wgah'n ngilyaa, Dagon ngshagg ebunma lw'nafhagl h'y'hah ep, mg nnnzhro gebor ngkadishtu llll Tsathoggua. Naflya r'luh R'lyeh wgah'n y-shagg vulgtlaglnyar 'ai li'hee, ep gnaiih y-syha'h f''bthnk sll'ha lw'nafh ilyaa shtunggli, ep bug hrii hupadgh mg nnnstell'bsna. "
			},
		],
	},
	{
		title: "DEVELOP",
		tasks: [
			{
				name: "Yig",
				desc: "Naflsgn'wahl hafh'drn nglui vulgtlagln h'throd li'hee fhtagn f'kn'a chtenff ngluioth nog hafh'drn f'Azathoth kadishtu shugg, Chaugnar Faugnagl h'vulgtlagln Chaugnar Faugn lloig naflYoggoth sgn'wahl h'zhro fm'latgh shogg goka lloig uln. Chaugnar Faugn naflsyha'h gof'nn ngah uln nanilgh'ri shaggnyth ftaghuog naHastur, tharanak ron R'lyeh fhtagn eenyth llll ngmg. F'Hastur syha'h ftaghu nasll'ha gnaiih ch' naAzathoth yaog grah'nyar llll lloig, ron 'fhalma nilgh'ri nglui f'Hastur nafltharanak fhtagn Dagon ilyaa, nashogg f'ooboshu Nyarlathotep syha'h nglw'nafh ehye kadishtu nw k'yarnak. H'hrii throd geb h'ee llll ilyaa ngluiagl epagl hai mg 'ai, kadishtu ep f'Nyarlathotep tharanak bug Tsathoggua shagg f'Hastur hai, Chaugnar Faugnagl chtenff naflfhtagn h'fhtagn mg ph'ah Shub-Niggurath ebunmaog nabug. "
			},
		],
	},
	{
		title: "TEST",
		tasks: [],
	},
	{
		title: "DONE",
		tasks: [
			{
				name: "Azatoth",
				desc: "ai kn'a shogg f'throd throd bug f'fm'latgh mg gof'nn fhtagn uh'e y-ch' ch', ngooboshu nglui r'luh h'vulgtm wgah'n h'ilyaa ph'vulgtlagln mnahn' ya naron ftaghu, tharanakor zhro grah'n nglui R'lyeh stell'bsna li'hee nilgh'ri Hastur llll sll'ha. Azathoth gof'nn ehyeyar ron c'bthnk geb, tharanak chtenff ehye wgah'n vulgtm ph'ron, 'fhalma chtenff Dagon lw'nafh. Tharanak llll ron kn'a kadishtu tharanak, Hastur s'uhn nog Tsathoggua f'zhro ron, shagg nguaaah zhro wgah'nyar. Phlegeth h'goka cvulgtlagln naya nog tharanak nali'hee h'athg Tsathoggua, ee nog ilyaaog r'luh gnaiih geb fhtagn Nyarlathotep fhtagn, shoggagl nghrii hupadgh naChaugnar Faugn cebunma throd ph'hupadgh."
			},
			{
				name: "Ipswitch",
				desc: "a doomed task"
			},
			{
				name: "Denver",
				desc: "a generic task"
			},
			{
				name: "Australia",
				desc: "a generic task"
			},
		],
	}]
}

export default function bucket(state=initialState, action) {
	switch(action.type){
		case BucketActionTypes.ADD_TASK:
			const newBuckets = state.bucketList.map((bucket, index)=>{
				if (index === action.index){
					return {
						...bucket,
						tasks: [
							...bucket.tasks,
							action.task
						]
					}
				}
				return bucket;
			});
			return {
				bucketList: newBuckets
			}
		case BucketActionTypes.REMOVE_TASK:
			return state.bucketList.map((bucket, index)=> {
				if (index === action.index){
					console.log(bucket)
					return {
						...bucket,
						tasks: [
							...bucket.tasks.slice(0, action.index),
							...bucket.tasks.slice(action.index + 1)
						]
					}
				}
				return bucket;
			});
		default:
			return state;
	}
}