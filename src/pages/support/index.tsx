import { Banner } from "../../components/Banner";
import Hero, { HeroBody } from "../../components/Hero";
import { Layout } from "../../components/Layout";
import { Post } from "../../components/Post";
import { Asterisk } from "../../icons/Asterisk";
import { Book } from "../../icons/Book";
import { Chart } from "../../icons/Chart";
import { Database } from "../../icons/Database";
import { Graphs } from "../../icons/Graphs";

export default function Support() {
	return (
		<Layout page={"support"}>
			<Banner colour={"red"}>
				<div className={"flex gap-sm ai-center"} style={{ color: "var(--ams-white)" }}>
					<Asterisk />
					<span style={{ fontSize: "1.125rem" }}>
						<strong>Have an emergency?</strong> Help is at hand, give us a call on our
						toll-free number at <strong>07523 123111</strong> or{" "}
						<a href={"#"} style={{ color: "var(--ams-white)" }}>
							speak to an agent via Live Chat
						</a>
						.
					</span>
				</div>
			</Banner>

			<Hero size={"md"}>
				<HeroBody className={"gap-xl"}>
					<HeroBody className={"ai-center gap-md"}>
						<h1>Help & support</h1>

						<form>
							<label
								className={"ams-visually-hidden"}
								htmlFor={"ams-search-form--search"}
							>
								Search:
							</label>
							<input
								id={"ams-search-form--search"}
								className={"ams-input"}
								type={"text"}
								name={"q"}
								placeholder={"Search by error message or error code"}
								required
								style={{ width: "600px", backgroundColor: "#F9F9F9" }}
							/>
						</form>

						<h2>Search by product</h2>

						<ul className={"ams-solutions-list"}>
							<li>
								<a href="#">
									<div className="ams-solution-icon">
										<Database />
									</div>
									<span>AMStore</span>
								</a>
							</li>
							<li>
								<a href="#">
									<div className="ams-solution-icon">
										<Graphs />
									</div>
									<span>AMBuilder</span>
								</a>
							</li>
							<li>
								<a href="#">
									<div className="ams-solution-icon">
										<Chart />
									</div>
									<span>AMReports</span>
								</a>
							</li>
							<li>
								<a href="#">
									<div className="ams-solution-icon">
										<Book />
									</div>
									<span>AMCat</span>
								</a>
							</li>
						</ul>
					</HeroBody>

					<HeroBody className={"gap-md"}>
						<HeroBody>
							<h1>Common problems</h1>
						</HeroBody>
						<HeroBody className={"ams-post-items"}>
							<Post
								id={"error-2034"}
								href={"#"}
								category={"Solved"}
								headline={"Error 2034 - User is not authenticated"}
								image={"/assets/images/support/error-2034.jpg"}
								imageAlt={
									"An image of error 2034 text in the top left with user is not authenticated in the bottom left."
								}
							/>

							<Post
								id={"error-343"}
								href={"#"}
								category={"Solved"}
								headline={"Error 343 - Unable to save report"}
								image={"/assets/images/support/error-343.jpg"}
								imageAlt={
									"An image of error 343 text in the top left with unable to save report in the bottom left."
								}
							/>

							<Post
								id={"error-67545"}
								href={"#"}
								category={"Solved"}
								headline={"Error 67545 - Indexed table was not available"}
								image={"/assets/images/support/error-67545.jpg"}
								imageAlt={
									"An image of error 67545 text in the top left with indexed table was not available in the bottom left."
								}
							/>
						</HeroBody>
					</HeroBody>
				</HeroBody>
			</Hero>
		</Layout>
	);
}
