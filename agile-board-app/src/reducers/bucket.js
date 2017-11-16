import * as BucketActionTypes from '../actiontypes/bucket';

const initialState = {
	bucketList : [
	{
		title: "BRAINSTORM",
		tasks: [
			{
				name: "Visit R'lyeh",
				desc: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.",
				star: false			
			},
			{
				star: false,
				name: "Read Lovecraft",
				desc: "Y'hah ah nilgh'ri zhro y-hlirgh y'hah ilyaa llll, h'uh'e shtunggli.",
			},
		],
	},
	{
		title:	"PLAN",
		tasks: [
			{
				star: false,
				name: "Task 4",
				desc: "a normal task"
			},
			{
				star:  true,
				name: "Task 42",
				desc: "an important task"
			},
			{
				name: "Team Party",
				desc: "Fhalma phlegeth ph'nglui f'uln nnnilyaa vulgtlagln  nnnstell'bsna. ",
				star: false
			},
		],
	},
	{
		title: "DEVELOP",
		tasks: [
			{
				star: false,
				name: "New UI Buttons",
				desc: "These buttons are a little tacky..."
			},
			{
				name: "Animate Azatoth",
				desc: "Ngooboshu nglui r'luh h'vulgtm wgah'n thali'hee nilgh'ri Hastur llll sll'ha. Hoggagl nghrii hupadgh naChaugnar Faugn cebunma throd ph'hupadgh.",
				star: false
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
				star: false,
				name: "Save Ipswitch",
				desc: "this task was doomed from the start"
			},
			{
				star: false,
				name: "Task 2",
				desc: "Create alpha/beta list priority"
			},
			{
				star: false,
				name: "Definition of DONE",
				desc: "Define DONE"
			},
		],
	}]
}

export default function bucket(state=initialState, action) {
	switch(action.type){
		case BucketActionTypes.ADD_TASK:
			const newBuckets = state.bucketList.map((bucket, index)=> {
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
			const newBucketList = state.bucketList.map((bucket, index)=> {
				if (index === action.index){
					return {
						...bucket,
						tasks: [
							...bucket.tasks.slice(0, action.taskIndex),
							...bucket.tasks.slice(action.taskIndex + 1)
						]
					}
				}
				return bucket;
			});
			return {
				bucketList: newBucketList
			}
		case BucketActionTypes.SHIFT_TASK:
			const shiftedBucketList = state.bucketList.map((bucket, index)=>{
				//cut out task at current index
				if (index === action.index){
					return {
						...bucket,
						tasks: [
							...bucket.tasks.slice(0, action.taskIndex),
							...bucket.tasks.slice(action.taskIndex + 1)
						]
					}
				}
				//reassgin task if new index exists
				if (index === (action.index + action.shift)){
					const task = state.bucketList[action.index].tasks[action.taskIndex]
					return {
						...bucket,
						tasks:[
							...bucket.tasks,
							task
						]
					}
				}
				return bucket
			});
			return {
				bucketList: shiftedBucketList
			}
		case BucketActionTypes.UPDATE_TASK:
			const updatedBucketlist = state.bucketList.map((bucket, index)=>{
				if (index === action.index){
					return {
						...bucket,
						tasks: [
							...bucket.tasks.slice(0, action.taskIndex),
							action.task,
							...bucket.tasks.slice(action.taskIndex + 1)
						]
					}
				}
				return bucket
			});
			return {
				bucketList: updatedBucketlist
			}
		default:
			return state;
	}
}