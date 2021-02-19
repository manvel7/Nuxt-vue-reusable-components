<template>
  <div class="test" style="margin-left: 50px">
    <Button
      :label="'Secondary'"
      :background="'secondary'"
      :size="'medium'"
      :color="'black'"
      :disabled="false"
    />
    <Button
      :label="'normal'"
      :background="'normal'"
      :size="'medium'"
      :color="'black'"
      :disabled="false"
    />
    <Button
      :label="'Disable'"
      :background="'disable'"
      :size="'medium'"
      :color="'black'"
      :disabled="true"
    />
    <Checkbox :label="'Checked'" :disabled="false" />
    <Checkbox :label="'Checked'" :disabled="true" />
    <div>
      <Radio
        :items="[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]"
      />
    </div>
    <div>
      <SwitchComponent :size="'medium'" :label="'Test'" />
      <SwitchComponent :size="'large'" :label="'Test1'" />
    </div>
    <div>
      <Tags :color="'primary'" />
      <Tags :color="'secondary'" />
    </div>
    <div>
      <Divider :width="'150px'" />
      <br />
      <Divider :width="'500px'" />
      <br />
      <Divider :width="'100%'" />
    </div>
    <div>
      <Avatar
        :src="require(`~/assets/img/icon.svg`)"
        :image-type="'image'"
        :size="'medium'"
      />

      <br />
      <Avatar
        :src="require(`~/assets/img/icon-avatar.svg`)"
        :image-type="'icon'"
        :size="'large'"
      />
    </div>
    <div>
      <Icons :size="'large'" :src="require(`~/assets/img/right-arrow.svg`)" />
      <Icons :size="'medium'" :src="require(`~/assets/img/right-arrow.svg`)" />
      <Icons :size="'small'" :src="require(`~/assets/img/right-arrow.svg`)" />
    </div>
    <div>
      <Media :src="require(`~/assets/img/media.svg`)" :size="'default'" />
      <Media :src="require(`~/assets/img/media.svg`)" :size="'default-small'" />
      <Media :src="require(`~/assets/img/media.svg`)" :size="'square'" />
      <Media
        :src="require(`~/assets/img/media.svg`)"
        :size="'portrait-small'"
      />
    </div>
    <Lists
      :width="'480px'"
      :items="[
        {
          title: 'Test',
          subTitle: 'Test',
          iconSrc: require(`~/assets/img/icon.svg`),
          control: 'qe',
          metaData: 'qe',
          timeStamp: 'timeStamp',
        },
      ]"
    />
  </div>
</template>

<script>
// import { functions } from "@/utils";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Radio from "@/components/ui/Radio";
import SwitchComponent from "@/components/ui/SwitchType";
import Tags from "@/components/ui/Tags";
import Divider from "@/components/ui/Divider";
import Avatar from "@/components/ui/Avatar";
import Icons from "@/components/ui/Icons";
import Media from "@/components/ui/Media";
import Lists from "@/components/ui/Lists";
// import BaseLink from "@/components/ui/BaseLink";
// import SvgClose from "~/assets/img/cloud-arrow.svg?inline";

export default {
  name: "Testing",
  components: {
    // SvgClose,
    // MyButton,
    // BaseLink,
    Button,
    Checkbox,
    Radio,
    SwitchComponent,
    Tags,
    Divider,
    Avatar,
    Icons,
    Media,
    Lists,
  },
  data() {
    return {
      name: "",
      age: 0,
    };
  },
};
</script>

<!--<style lang="scss" scoped></style>-->
