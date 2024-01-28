import React from "react";
import { Icon } from "@iconify/react";
import { Button, ButtonGroup } from "react-bootstrap";
import img from "src/assets/images/image 2.png";
import { NavLink } from "react-router-dom";

export default function ArticleDetails() {
  return (
    <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
      <div className="w-50 pb-5">
        <h1 className="my-4">Next on the pipeline</h1>
        <p className="lh-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          neque vero dolor architecto iste sunt exercitationem, nihil sint ea,
          nisi eveniet, unde eaque quisquam illo minima inventore quia ipsam
          eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          quis sed, corrupti impedit vitae dignissimos, voluptatum fugit
          consectetur accusamus quasi eveniet distinctio. Ducimus possimus
          voluptatem veritatis neque totam quibusdam consequatur! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Neque itaque tempora,
          perferendis ullam omnis error placeat delectus, maiores beatae
          aspernatur eos. Blanditiis odio consequuntur quia rem nesciunt,
          voluptatibus aliquam et!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          nemo consectetur suscipit asperiores voluptatem modi. Magni atque
          dolor consequatur libero commodi nisi, ipsam dolorum, dignissimos
          accusamus earum facere deserunt iure. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis fuga dolorum quos omnis aliquid
          suscipit nihil architecto quia, non, qui unde placeat maxime
          laboriosam dolor nesciunt officia cupiditate consectetur rem?
        </p>
      </div>
      <div className="w-75 d-flex flex-column justify-content-center align-items-center">
        <img className="w-75 h-25" src={img} alt="article_image" />
        <p className="w-50 text-center text-warp fw-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          corporis iusto repudiandae recusandae ad magni fugit veniam.
        </p>
      </div>
      <div className="w-50 pb-5">
        <p className="lh-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          neque vero dolor architecto iste sunt exercitationem, nihil sint ea,
          nisi eveniet, unde eaque quisquam illo minima inventore quia ipsam
          eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          quis sed, corrupti impedit vitae dignissimos, voluptatum fugit
          consectetur accusamus quasi eveniet distinctio. Ducimus possimus
          voluptatem veritatis neque totam quibusdam consequatur! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Neque itaque tempora,
          perferendis ullam omnis error placeat delectus, maiores beatae
          aspernatur eos. Blanditiis odio consequuntur quia rem nesciunt,
          voluptatibus aliquam et!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          nemo consectetur suscipit asperiores voluptatem modi. Magni atque
          dolor consequatur libero commodi nisi, ipsam dolorum, dignissimos
          accusamus earum facere deserunt iure. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis fuga dolorum quos omnis aliquid
          suscipit nihil architecto quia, non, qui unde placeat maxime
          laboriosam dolor nesciunt officia cupiditate consectetur rem?
        </p>
        <ButtonGroup className="w-100" aria-label="First group">
          <Button className="border border-secondary " variant="white">
            <span className="px-1 py-1 d-flex justify-content-center gap-4">
              <Icon
                icon="ic:round-facebook"
                color="black"
                width="25"
                height="25"
              />
              <span>Share on Facebook</span>
            </span>
          </Button>
          <Button className="border border-secondary " variant="white">
            <span className="px-1 d-flex justify-content-center gap-4">
              <Icon icon="mdi:twitter" color="black" width="25" height="25" />
              <span>Share on Twitter</span>
            </span>
          </Button>
        </ButtonGroup>
        <div className="my-2">
          Tags :<NavLink to={"#"}>product design, </NavLink>
          <NavLink to={"#"}>culture</NavLink>
        </div>
      </div>
    </div>
  );
}
