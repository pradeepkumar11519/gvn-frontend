import {
	dehydrate,
	QueryClient,
	useMutation,
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { fetchAllComments } from "../pages/VideoPage/[VideoId]";
import { IoSend } from "react-icons/io5";
import { AiFillDelete, AiFillTags, AiFillCloseCircle } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import context from "../Context/Context";
import { off } from "process";
import Modal from "react-modal";
import { toast } from "react-toastify";
import ScaleLoader from 'react-spinners/ScaleLoader'


















export default function Comments(props) {
	const {setIsOpen,setIsOpen1,IsOpen1,modalIsOpen} = useContext(context)
	const { user } = useContext(context);
	const [UserComment, setUserComment] = useState(null);
	const [parent, setparent] = useState(null);
	const [typedcomment, settypedcomment] = useState(null);
	const [commentid, setcommentid] = useState(null);
	
	const [updatedvalue, setupdatedvalue] = useState(null);



	const { mutate, isLoading, isFetching,isError } = useAddComment();
	const test1 = useUpdateComment();
	const test = useDeleteComment();


	const onSubmit = (values) => {
		values["token"] = props.cookies.access;

		mutate(values);
	};


	
	const onDeleteComment = (values) => {
		test.mutate(values);
		
		
	};

	const onUpdateComment = (values) => {
		test1.mutate(values);
		
		
	};





	const router = useRouter();
	const AllComments = useQuery(["AllComments"], () => {
		return fetchAllComments(router.query.VideoId);
	});

	








	if (AllComments.isError) {
		return <h1 className="">Network Error</h1>;
	}








	const ChangeTagColour = (id) => {
		if (
			document.getElementById(`tagbtn${id}`).style.backgroundColor === "black"
		) {
			setUserComment(null);
			setparent(null);
			document.getElementById(`tagbtn${id}`).style.backgroundColor =
				"transparent";
			const elementlist = document.querySelectorAll(`#abovebtn`);

			for (let i = 0; i < elementlist.length; i++) {
				if (`tagbtn${id}` !== elementlist[i].children[0].getAttribute("id")) {
					elementlist[i].children[0].style.display = "block";
				}
			}
		} else {
			document.getElementById(`tagbtn${id}`).style.backgroundColor = "black";

			const elementlist = document.querySelectorAll(`#abovebtn`);

			for (let i = 0; i < elementlist.length; i++) {
				if (`tagbtn${id}` !== elementlist[i].children[0].getAttribute("id")) {
					elementlist[i].children[0].style.display = "none";
				}
			}
		}
	};









	









	const customStyles = {
		overlay: {
			position: "fixed",
			zIndex: 1020,
			top: 0,
			left: 0,
			width: "100vw",
			height: "100vh",
			background: "rgba(0,0,0, 0.3)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		content: {
			background: "white",
			// width: '20rem',
			left: "0%",
			width: "250px",
			overflowY: "auto",
			position: "relative",
			border: "1px solid #ccc",
			borderRadius: "0.3rem",
		},
	};












	









	
	
	













	return (
		<div className="ring-8 ring-opacity-60 ring-red-600 p-2 bg-gradient-to-r text-white from-violet-600 to-rose-600 ">
			<h1 className="text-center my-5 font-bold lg:text-3xl text-xl">
				Add Your Comment
			</h1>
			<div id="message-box" className="my-3">
				<div className="flex">
					<input
						onChange={(e) => {
							settypedcomment(e.target.value);
						}}
						className="focus:ring-4 focus:ring-opacity-50 focus:ring-white outline-none text-black transition-all fade-in-out p-2 w-full rounded-md"
						type="text"
					/>
					<button
					disabled={!user}
						onClick={() => {
							onSubmit({
								commentelement: {
									user: user?.username,
									video: router.query.VideoId,
									comment: typedcomment,
									parent: parent,
								},
							});
						}}
						className="border-2  mx-2 px-2 bg-black rounded-md invert hover:invert-0 transition-all fade-in-out focus:ring-4 focus:ring-opacity-50 focus:ring-white border-white hover:border-white"
					>
						{user?(isLoading || isFetching)?(
							<div className="mx-auto flex justify-center">
							<ScaleLoader color={"white"} size={20} />
							</div>
						):(
						<IoSend />
						):"Login To Comment"}
						{}
					</button>
				</div>
			</div>

			{UserComment ? (
				<div className="bg-gray-900 mb-3 rounded-md p-2 font-bold">
					{user.username} tagged {UserComment.user} on {UserComment.comment}
				</div>
			) : null}

			{AllComments.data.map((comment) => {
				return (
					<div className="" key={comment.id}>
						<hr />
						<div
							id="comments"
							className="grid grid-cols-[40px_auto_100px] my-3"
						>
							<div
								id="user-logo"
								className="border-2 border-black pb-2 px-3 rounded-full break-all   bg-orange-500 text-white w-fit h-fit"
							>
								p
							</div>

							<div id="user-message and time" className="break-all  p-1 ">
								<div id="users comment" className="break-all">
									{comment.parent ? (
										<div className="mb-2 ">
											<span className="font-bold">{comment.user}</span>{" "}
											<span className="font-medium">Gave An Reply To</span>{" "}
											<span className="font-bold">
												{comment.parent_name} On{" "}
											</span>
											<span className="break-all">
												{comment.parent_comment}
											</span>
										</div>
									) : (
										<div className="mb-2">
											<b>{comment.user} said</b>
										</div>
									)}

									<span className="break-all text-xl">
										{" "}
										{"           "}
										{comment.comment}
									</span>
								</div>
								<div id="time and date" className="my-2">
									<b>
										On {comment.datestamp} At {comment.timestamp}
									</b>
								</div>
							</div>
							<Modal
								isOpen={modalIsOpen}
								style={customStyles}
								onRequestClose={() => {
									setIsOpen(false);
								}}
							>
								<div className="justify-center flex flex-col">
									<button
										className="mb-5"
										onClick={() => {
											setIsOpen(false);
										}}
									>
										<AiFillCloseCircle className="w-6 h-6 focus:ring-4 focus:ring-opacity-50 focus:ring-black transition-all rounded-full fade-in-out " />
									</button>
									<h1 className="text-black font-medium text-xl ">
										Are You Sure You Would Like To Delete This Comment
									</h1>
									<button
										onClick={() => {
											onDeleteComment({
												id: commentid,
												token: props.cookies.access,
											});
										}}
										className="bg-black p-2 rounded-md text-white my-2 focus:ring-4 focus:ring-opacity-50 focus:ring-black transition-all fade-in-out"
									>
										{(test.isLoading)?(<ScaleLoader color={"white"}/>):("Delete")}
										
									</button>
								</div>
							</Modal>
							<Modal
								isOpen={IsOpen1}
								style={customStyles}
								onRequestClose={() => {
									setIsOpen1(false);
								}}
							>
								<div>
									<button
										className="mb-5"
										onClick={() => {
											setIsOpen1(false);
										}}
									>
										<AiFillCloseCircle className="w-6 h-6 focus:ring-4 focus:ring-opacity-50 focus:ring-black transition-all rounded-full fade-in-out " />
									</button>
									<div className="text-xl font-medium ">
										Update Your Comment
									</div>
									<textarea
										className="border-2 border-black ring-4 ring-opacity-50 ring-black focus:ring-8 focus:ring-opacity-50 focus:ring-black rounded-md  p-1 font-medium text-black my-2"
										type="text"
										onChange={(e) => {
											setupdatedvalue(e.target.value);
										}}
									/>
									<button
										className="p-2 bg-black text-white my-2 rounded-md"
										onClick={() => {
											onUpdateComment({
												id: commentid,
												comment: updatedvalue,
												token: props.cookies.access,
											});
										}}
									>
										{(test1.isLoading)?(<ScaleLoader className="text-white" color={"white"}/>):("Update")}
									</button>
								</div>
							</Modal>







							{user ? (
								<>
									<div id="comment-change-options" className=" mx-2  p-1">
										{comment.user !== user.username ? (
											<>
												<Tippy content="Tag">
													<div className="">
														<div id="abovebtn">
															<button
																id={`tagbtn${comment.id}`}
																onClick={() => {
																	setUserComment({
																		user: comment.user,
																		comment: comment.comment,
																	});
																	setparent(comment.id);
																	ChangeTagColour(comment.id);
																}}
																className="mx-[23px] my-2 cursor-pointer border-2 border-white p-1 tagbtn"
															>
																<AiFillTags />
															</button>
														</div>
													</div>
												</Tippy>
											</>
										) : (
											<div className="">
												<div className="flex  my-2">
													<Tippy content="Delete">
														<div
															onClick={() => {
																setIsOpen(true);
																setcommentid(comment.id);
															}}
															className=" mx-auto border-2 border-white p-1 cursor-pointer"
														>
															<AiFillDelete />
														</div>
													</Tippy>
													<p className="mx-1">Delete</p>
												</div>

												<div className="flex my-2">
													<Tippy content="Update">
														<div
															onClick={() => {
																setIsOpen1(true);
																setcommentid(comment.id);
															}}
															className="mx-auto border-2 border-black invert p-1  cursor-pointer"
														>
															<GrUpdate className="" />
														</div>
													</Tippy>
													<p className="mx-1">Update</p>
												</div>
											</div>
										)}
									</div>
								</>
							) : (
								<>
									<div id="comment-change-options" className=" mx-2  p-1">
										<div className="grid grid-cols-2">
											<Tippy content="Login To Delete">
												<div className=" mx-auto border-2 border-white p-1 cursor-pointer">
													<AiFillDelete />
												</div>
											</Tippy>
											<Tippy content="Login To Update">
												<div className="mx-auto border-2 border-black invert p-1  cursor-pointer">
													<GrUpdate className="" />
												</div>
											</Tippy>
										</div>
										<Tippy content="Login To Tag">
											<div className="">
												<div>
													<button
														disabled={true}
														className="mx-[23px] my-2 cursor-pointer border-2 border-white p-1 tagbtn"
													>
														<AiFillTags />
													</button>
												</div>
											</div>
										</Tippy>
									</div>
								</>
							)}
						</div>
						<hr />
					</div>
				);
			})}






		</div>
	);
}

























export const AddUserComment = async (comment) => {
	return axios
		.post("https://gvn-backend-gvn-backend.herokuapp.com/api/v1/AddComment/", comment.commentelement, {
			headers: {
				Authorization: "Bearer " + comment.token,
			},
		})
		.then((response) => {
			return response.data;
		});
};














export const useAddComment = () => {
	
	const queryClient = useQueryClient();
	return useMutation(AddUserComment, {
		onSuccess: () => {
			toast.success("Comment Added SuccesFully", {
				position: toast.POSITION.TOP_LEFT,
			});
			
		},
		onError: (context) => {
			toast.error("Couldnt Add Comment.Server Error");
			queryClient.setQueryData(["AllComments"], context.previousData);
		},
		onMutate: async (newData) => {
			await queryClient.cancelQueries(["AllComments"]);
			const previousData = queryClient.getQueryData(["AllComments"]);
			queryClient.setQueryData(["AllComments"], (oldQueryData) => {
				return [...oldQueryData, newData.commentelement];
			});
			return {
				previousData,
			};
		},

		onSettled: () => {
			queryClient.invalidateQueries(["AllComments"]);
		},
	});
};

















const DeleteComment = async (values) => {
	return axios.delete(`https://gvn-backend-gvn-backend.herokuapp.com/api/v1/RUDComment/${values.id}/`, {
		headers: {
			Authorization: "Bearer " + values.token,
		},
	});
};


















const useDeleteComment = () => {
	const {setIsOpen} = useContext(context)
	const queryClient = useQueryClient();
	return useMutation(DeleteComment, {
		onSuccess: () => {
			queryClient.invalidateQueries(["AllComments"]);

			toast.success("Comment Succesfully Deleted");
			setIsOpen(false)
		},
		onError: (context) => {
			toast.error("Couldnt Delete Comment Try Again After Some time");
			queryClient.setQueryData(["AllComments"], context.previousData);
			setIsOpen(false)
		},
		
	});
	
};
















const UpdateComment = async (values) => {
	return axios.put(
		`https://gvn-backend-gvn-backend.herokuapp.com/api/v1/RUDComment/${values.id}/`,
		{ comment: values.comment },
		{
			headers: {
				Authorization: "Bearer " + values.token,
			},
		}
	);
};













const useUpdateComment = () => {
	const {setIsOpen1} = useContext(context)
	const queryClient = useQueryClient();
	return useMutation(UpdateComment, {
		onSuccess: () => {
			queryClient.invalidateQueries(["AllComments"]);

			toast.success("Comment Succesfully Updated");
			setIsOpen1(false)
		},
		onError: (context) => {
			toast.error("Couldnt Update Comment Try Again After Some time");
			queryClient.setQueryData(["AllComments"], context.previousData);
			setIsOpen1(false)
		},
	});
};
