module Theme
  class Version
    @major = 1
    @minor = 1
    @tiny  = 0
    @build = 'dev'

    class << self
      attr_reader :major, :minor, :tiny, :build

      def to_s
        [@major, @minor, @tiny, @build].compact.join('.')
      end
    end
  end

  VERSION = Version.to_s
end
