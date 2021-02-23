<template>
  <div class="test">
    <div class="grid gap-4 sm:grid-cols-6 md:grid-cols-3 lg:grid-cols-4">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
    <Button
      :label="'Secondary'"
      :background="'secondary'"
      :size="'large'"
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
      :size="'small'"
      :color="'black'"
      :disabled="true"
    />
    <Checkbox :label="'Checked'" :disabled="false" :name="'rere'" />
    <Checkbox :label="'Checked'" :disabled="true" :name="'rere'" />
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
    <br />
    <br />
    <br />
    <div>
      <Paginations :pages="{ total: 1, currentPage: 1 }" />
      <Paginations :pages="pages" @paginate="paginate" />
    </div>
    <br />
    <div>
      <Tabs>
        <Tab name="Posts (21)" :selected="true">
          <h1>What we do</h1>
        </Tab>
        <Tab name="Photos (139)">
          <h1>How much we do it for</h1>
        </Tab>
        <Tab name="Videos (54)">
          <h1>Why we do it</h1>
        </Tab>
      </Tabs>
    </div>
    <div>
      <Input
        :type="'email'"
        :label="'Enter Email'"
        :disabled="false"
        :help-text="'Help Text'"
        :name.sync="userName"
        :error="$v.userName"
        :rules="[
          { name: 'required' },
          { name: 'minLength', value: 4 },
          { name: 'email' },
        ]"
      />
    </div>
    <br />
    <br />
    <div>
      <Dropdown
        :list="[
          { id: 1, label: 'Orange', value: 'orange' },
          { id: 2, label: 'Apple', value: 'apple' },
          { id: 3, label: 'Lemon', value: 'Lemon' },
        ]"
        :return-object="false"
        :item-value="'id'"
        :item-label="'label'"
        :help-text="'Help Text'"
        :name.sync="fruit"
      />
    </div>
    <br />
    <div>
      <FilterDropdown
        :list="[
          { id: 1, label: 'Orange', value: 'orange' },
          { id: 2, label: 'Apple', value: 'apple' },
          { id: 3, label: 'Lemon', value: 'Lemon' },
        ]"
        :return-object="false"
        :item-value="'id'"
        :item-label="'label'"
        :name.sync="fruit"
      />
    </div>
    <br />
    <br />
    <div>
      <FileUpload />
    </div>
    <br />
    <br />
    <br />
    <br />
    <div>
      <button @click="showSnackbar = !showSnackbar">show</button>
      <SnackBar
        :type="'snackbar'"
        :active.sync="showSnackbar"
        :position="position"
        :timeout="10000"
        :message="'Can’t send a message. Retry in 5 seconds.'"
        :background-color="'default'"
        :is-close="true"
        @close="close"
      />
    </div>
    <br />
    <div>
      <button id="show-modal" class="demo-button" @click="showModal = true">
        Show Modal
      </button>
      <Alerts v-if="showModal" :show-close="true" @close="showModal = false" />
    </div>
    <br />
    <br />
    <Lists
      :width="'480px'"
      :items="[
        {
          title: 'Two-line + Control',
          subTitle: 'Some secondary text here',
          iconSrc: require(`~/assets/img/icon.svg`),
          data: {
            type: 'timestamp',
            value: 'timestamp',
          },
        },
        {
          title: 'Two-line + Control',
          subTitle: 'Some secondary text here',
          iconSrc: require(`~/assets/img/icon.svg`),
          data: {
            type: 'metadata',
            value: '5',
          },
        },
        {
          title: 'Two-line + Control',
          subTitle: 'Some secondary text here',
          iconSrc: require(`~/assets/img/icon.svg`),
          data: {
            type: 'control',
            value: '5',
          },
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
import Input from "@/components/ui/Input";
import Paginations from "@/components/ui/Paginations";
import Tabs from "@/components/ui/tabs/Tabs";
import Tab from "@/components/ui/tabs/Tab";
import SnackBar from "@/components/ui/SnackBar";
import Dropdown from "@/components/ui/Dropdown";
import FilterDropdown from "@/components/ui/FilterDropdown";
import FileUpload from "@/components/ui/FileUpload";
import Alerts from "@/components/ui/Alerts";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "Testing",
  components: {
    Alerts,
    FileUpload,
    FilterDropdown,
    Dropdown,
    Tabs,
    Tab,
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
    Input,
    Paginations,
    SnackBar,
  },
  data() {
    return {
      userName: "",
      fruit: "",
      age: 0,
      error: "",
      pages: { total: 5, currentPage: 3 },
      showSnackbar: false,
      position: "top-right",
      showModal: false,
    };
  },
  validations: {
    userName: {
      required,
      email,
      minLength: minLength(4),
    },
  },
  methods: {
    paginate(value) {
      this.pages.currentPage = value;
    },
    close() {
      this.showSnackbar = false;
    },
  },
};
</script>

<!--<style lang="scss" scoped></style>-->
