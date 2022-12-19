<template>
  <InnerPageHero image-url="/images/image-3.jpg" title="Contact us" />
  <div class="container px-4 py-8 mx-auto sm:py-12 sm:px-0">
    <div class="grid sm:grid-cols-3 sm:gap-4">
      <div><span class="text-gray-500">Address</span> lorem ipsam</div>
      <div><span class="text-gray-500">Phone</span> +8801787350229</div>
      <div><span class="text-gray-500">Email</span> abiruzzaman.molla@gmail.com</div>
    </div>
    <div class="grid gap-8 mt-8 sm:mt-16 sm:grid-cols-2 sm:gap-12">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.3870396524!2d90.27919417956304!3d23.78057325651934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1670908470269!5m2!1sen!2sbd"
          class="w-full"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form action="" class="p-8 space-y-4 bg-gray-300 rounded shadow">
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            class="w-full px-4 py-2 bg-gray-200 border rounded focus:border-primary focus:outline-none"
            required
          />
          <span class="text-sm text-red-600">The error message</span>
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter email address"
            class="w-full px-4 py-2 bg-gray-200 border rounded focus:border-primary focus:outline-none"
            required
          />
          <!-- <span class="text-sm text-red-600">The error message</span> -->
        </div>
        <div>
          <input
            type="phone"
            placeholder="Enter phone number"
            class="w-full px-4 py-2 bg-gray-200 border rounded focus:border-primary focus:outline-none"
            required
          />
          <!-- <span class="text-sm text-red-600">The error message</span> -->
        </div>
        <div>
          <textarea
            placeholder="Enter your message"
            rows="5"
            class="w-full px-4 py-2 bg-gray-200 border rounded focus:border-primary focus:outline-none"
            required
          ></textarea>
          <!-- <span class="text-sm text-red-600">The error message</span> -->
        </div>
        <div class="px-4 py-2 text-white bg-green-600">Lorem ipsum dolor sit amet.</div>
        <div class="px-4 py-2 text-white bg-red-600">Lorem ipsum dolor sit amet.</div>
        <button
          class="px-4 py-2 text-white rounded bg-primary sm:px-6 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import InnerPageHero from "@/components/InnerPageHero.vue";

export default {
  setup() {},
  components: { InnerPageHero },
};
</script>
