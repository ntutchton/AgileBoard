import * as BucketActionTypes from '../actiontypes/bucket';

const initialState = {
	bucketList : [
	{
		title: "BRAINSTORM",
		tasks: [
			{
				name: "TASK 1",
				desc: "a generic task"
			},
			{
				name: "TASK 11",
				desc: "a generic task"
			},
		],
	},
	{
		title:	"PLAN",
		tasks: [
			{
				name: "TASK X",
				desc: "a generic task"
			},
			{
				name: "MASTER TASK",
				desc: "a generic task"
			},
			{
				name: "TASK 99",
				desc: "a generic task"
			},
		],
	},
	{
		title: "DEVELOP",
		tasks: [
			{
				name: "TASK 7",
				desc: "a generic task"
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
				name: "TASK 1",
				desc: "a generic task"
			},
			{
				name: "TASK 2",
				desc: "a generic task"
			},
			{
				name: "TASK 3",
				desc: "a generic task"
			},
			{
				name: "TASK 4",
				desc: "a generic task"
			},
		],
	}]
}


export default function bucket(state=initialState, action) {
	switch(action.type){
		case BucketActionTypes.ADD_TASK:
			return state.bucketList.map((bucket, index)=>{
				if (index === action.index){
					return {
						...bucket,
						tasks: bucket.tasks.push(action.task)
					}
				}
				return bucket;
			});
		case BucketActionTypes.REMOVE_TASK:
			return state.bucketList.map((bucket, index)=> {
				if (index === action.index){
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