require 'fileutils'

module Jekyll
  module WorkerImageHooks
    def self.site_post_read(site)
      path = '/assets/images/workers'
      source_path = site.source + path

      # Prevent the /assets/images/workers directory from being included in the default static files copy mechanism
      site.static_files = site.static_files.select { |file| !file.path.start_with?(source_path) }
    end

    def self.site_post_write(site)
      path = '/assets/images/workers'
      source_path = site.source + path
      dest_path = site.dest + path

      # Get all of the source and dest files
      worker_images = Dir.glob(source_path + '/**/*').select { |path| File.file?(path) }
      dest_images = Dir.glob(dest_path + '/**/*').select { |path| File.file?(path) }

      # Validate to see if a reload is necessary
      should_reload = false
      should_reload = true if worker_images.length != dest_images.length

      # Re-generate all images
      return unless should_reload

      for worker_image in worker_images do
        pieces = File.basename(worker_image, '.*').split('-')
        ext = File.extname(worker_image)
        worker = pieces[0]
        gender = pieces[1]
        style = pieces[2]
        version = pieces[3]

        new_file = "#{dest_path}/#{worker}/#{style}/#{gender}/#{version}#{ext}"
        FileUtils.mkdir_p(File.dirname(new_file))
        FileUtils.cp(worker_image, new_file)
      end
    end
  end
end

Jekyll::Hooks.register :site, :post_read do |*args| Jekyll::WorkerImageHooks.site_post_read(*args) end
Jekyll::Hooks.register :site, :post_write do |*args| Jekyll::WorkerImageHooks.site_post_write(*args) end